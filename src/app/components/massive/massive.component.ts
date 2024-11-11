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
  routeCountsByCategory: { [key: string]: number} = {};
  constructor(
    private massiveService: MassiveService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.massiveId = this.route.snapshot.paramMap.get('id')!;
    await this.getMassiveData();
    this.getRouteCountsByCategory();
  }

  // Получение списка секторов на массиве
  async getMassiveData() {
    console.log('Fetching massive data...');  // Добавлен лог
    // Запрос к API через сервис
    this.massiveService.GetMassiveById(this.massiveId).subscribe(
      (data: Massive) => {
        data.sectors = data.sectors?.sort((a,b)=>{
            const numA = parseFloat(a.numSector || '');
            const numB = parseFloat(b.numSector || '');
            return numA - numB;
          })
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

  getRouteCountsByCategory() {
    this.massiveService.getRouteCountsByCategory(this.massiveId).subscribe(
      (data) => {
        console.log('Route counts by category:', data); // Добавлен лог для проверки данных
        this.routeCountsByCategory = data;
      },
      (error) => console.error('Error fetching route counts by category:', error)
    );
  }
  getNonZeroCategories(): string[] {
    return Object.keys(this.routeCountsByCategory).filter(category => this.routeCountsByCategory[category] > 0);
  }

}
