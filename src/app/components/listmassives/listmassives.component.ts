import {Component, OnInit} from '@angular/core';
import {Massive} from "../../model/model";
import {MassiveService} from "../../service/massive.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Sector} from "../../model/model";

@Component({
  selector: 'app-listmassives',
  templateUrl: './listmassives.component.html',
  styleUrl: './listmassives.component.scss'
})
export class ListmassivesComponent implements OnInit {
  massiveId!: string;
  massiveData: Massive | null = null;
  constructor(
    private massiveService: MassiveService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.massiveId = this.route.snapshot.paramMap.get('id')!;
    await this.getMassiveData();
  }

  async getMassiveData() {
    console.log('Fetching massive data...');  // Добавлен лог
    // Запрос к API через сервис
    this.massiveService.GetMassiveById(this.massiveId).subscribe(
      (data: Massive) => {
        console.log('data');
        console.log(data);

        //console.log('Data before sorting:', data.sectors);  // Лог до сортировки

        data.sectors = data.sectors?.sort((a,b)=>(a.numSector || '').localeCompare(b.numSector || ''))
        this.massiveData = data; // Сохраняем данные в переменную
      },
      (error) => {
        console.error('Error fetching massive data:', error);
      }
    );
  }

  async onSectorPage(sectorId: string | undefined) {
    if(sectorId === undefined) {
      return;
    }
    await this.router.navigate(['/sector', sectorId]);
  }


}
