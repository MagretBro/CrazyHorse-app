import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MassiveService} from "../../service/massive.service";
import {Massive} from "../../model/model";

@Component({
  selector: 'app-massive',
  templateUrl: './massive.component.html',
  styleUrl: './massive.component.scss'
})
export class MassiveComponent implements OnInit {

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
        //console.log('Data after sorting:', data.sectors);  // Лог после сортировки

        this.massiveData = data; // Сохраняем данные в переменную
        //console.log('this.massiveData:', this.massiveData);  // Лог для проверки данных massiveData

        // console.log('this.massiveData');
        // console.log(this.massiveData);
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
