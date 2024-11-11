
import { Component, OnInit } from '@angular/core';
import { Sector, Picture, ClimbingRoute, Massive } from "../../model/model";
import { SectorService } from "../../service/sector.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PictureService } from "../../service/picture.service";

class ViewClimbingRoute extends ClimbingRoute {
  isOpen: boolean = false;
}
class ViewSector extends Sector {
  isOpen: boolean = false;
  override climbingRoutes: ViewClimbingRoute[] = [];
}

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {
  sectorId!: string;
  listSectors: Sector[]=[];
  // listSectors: Sector | null = null;
  sectorData: ViewSector | null = null;
  selectedPictureId: string | null = null;
  isZoomed: boolean = false;
  pictures: Picture[] = [];
  routeCountsForAllSectorsByCategory: { [key: string]: number } = {};
  //routeCountsForAllSectorsByCategory: { [category: string]: number } = {};

  constructor(
    private sectorService: SectorService,
    private pictureService: PictureService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.sectorId = this.route.snapshot.paramMap.get('id')!;
    await this.getSectorData();
    this.getRouteCountsForAllSectorsByCategory(); // Вызов метода для получения категорий с бэкенда
  }

  async getAllSectors() {
    let massiveId = this.sectorData?.massiveId;
    if (!massiveId) {
      console.log('Отсутствует massiveId');
      return;
    }
// Вывод секторов по massiveId
    this.sectorService.getListSectorsByMassiveId(massiveId).subscribe(
      (res:Sector[])=> {
        console.log("resLIST");
        console.log(res);
        this.listSectors = res
          .map(sector => ({
            ...sector,
            numSectorNumber: parseFloat(sector.numSector || '0')
          }))
          .sort((a, b) => a.numSectorNumber - b.numSectorNumber);

        console.log("Отсортированный список секторов:", this.listSectors);
      },
      //   this.listSectors = res
      //     .slice() // Создаем копию массива
      //     .sort((a, b) => {
      //       const numA = parseFloat(a.numSector || '0');
      //       const numB = parseFloat(b.numSector || '0');
      //       return numA - numB;
      //     });
      //   console.log("Отсортированный список секторов:", this.listSectors);
      // },
      error => console.error('Ошибка при получении списка секторов:', error)
    );
}


  async onSectorPage(sectorId: string | undefined) {

    if(sectorId === undefined) {
      return;
    }
    this.sectorId = sectorId;
    await this.getSectorData();
    this.getRouteCountsForAllSectorsByCategory();
  }



  async getSectorData() {
    this.sectorService.GetSectorById(this.sectorId).subscribe(
      (data: Sector) => {
        let viewData: ViewSector = {
          id: data.id,
          name: data.name,
          numSector: data.numSector,
          describe: data.describe,
          mapPoint: data.mapPoint,
          pictures: [],
          massiveId: data.massiveId,
          climbingRoutes: [],
          isOpen: false
        };
        data.pictures.forEach(p => {
          viewData.pictures.push(p);
        });

        data.climbingRoutes
          .sort((a, b) => parseFloat(a.numRouter || '') - parseFloat(b.numRouter || ''))
          .forEach(c => {
            let vcr: ViewClimbingRoute = {
              id: c.id,
              name: c.name,
              describe: c.describe,
              mapPoint: c.mapPoint,
              mapVidget: c.mapVidget,
              picture: c.picture,
              sectorsId: c.sectorsId,
              category: c.category,
              testimonial: c.testimonial,
              boltCount: c.boltCount,
              numRouter: c.numRouter,
              type: c.type,
              height: c.height,
              bolt: c.bolt,
              isOpen: false
            };
            viewData.climbingRoutes.push(vcr);
          });
        this.sectorData = viewData;
        this.getAllSectors();
      },
      error => {
        console.error('Error fetching sector data:', error);
      }
    );
  }

  /////////ТУТ проблема 2del

  // getListSectorsByMassiveId() {
  //   this.sectorService.GetListSectorsByMassiveId(this.sectorId).subscribe(
  //     data => {
  //       this.routeGetListSectorsByMassiveId = data;
  //     },
  //     error => {
  //       console.error('Error fetching route counts by category:', error);
  //     }
  //   );
  // }






  getRouteCountsForAllSectorsByCategory() {
    this.sectorService.getRouteCountsForAllSectorsByCategory(this.sectorId).subscribe(
      data => {
        this.routeCountsForAllSectorsByCategory = data;
      },
      error => {
        console.error('Error fetching route counts by category:', error);
      }
    );
  }

  // Функция для получения категорий с ненулевыми значениями
  getNonZeroCategories(): string[] {
    return Object.keys(this.routeCountsForAllSectorsByCategory).filter(
      category => this.routeCountsForAllSectorsByCategory[category] > 0
    );
  }

  toggleZoom(pictureId: string) {
    this.selectedPictureId = this.selectedPictureId === pictureId ? null : pictureId;
  }

  toggleDescriptionSector(viewSector: ViewSector) {
    viewSector.isOpen = !viewSector.isOpen;
  }

  toggleDescriptionClimbingRoute(viewRoute: ViewClimbingRoute) {
    viewRoute.isOpen = !viewRoute.isOpen;
  }
}



// import {Component, OnInit} from '@angular/core';
// import {Sector, Picture, Massive, ClimbingRoute} from "../../model/model";
// import {SectorService} from "../../service/sector.service";
// import {ClimbingRouteService} from "../../service/climbing-route.service";
// import {ActivatedRoute, Router} from "@angular/router";
// import {PictureService} from "../../service/picture.service";
// import {ListmassivesComponent} from "../listmassives/listmassives.component";
//
// class ViewClimbingRoute extends ClimbingRoute {
//   isOpen: boolean=false;
// }
// class ViewSector extends Sector {
//   isOpen: boolean=false;
//   override climbingRoutes: ViewClimbingRoute[] = [];
// }
//
// @Component({
//   selector: 'app-sector',
//   templateUrl: './sector.component.html',
//   styleUrls: ['./sector.component.scss']
// })
//
// export class SectorComponent implements OnInit {
//   sectorId!: string;
//   sectorData: ViewSector | null = null;
//   selectedPictureId: string | null = null;  // Добавляем переменную для хранения ID выбранной картинки
//   isZoomed: boolean = false;
//   pictures: Picture[] = [];
//
//   constructor(
//     private sectorService: SectorService,
//     private pictureService: PictureService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {
//   }
//
//   async ngOnInit() {
//     this.sectorId = this.route.snapshot.paramMap.get('id')!;
//     await this.getSectorData();
//     const categoryCounts = this.countRoutesByCategory();
//     // console.log(categoryCounts);
//   }
//   async getSectorData() {
//     this.sectorService.GetSectorById(this.sectorId).subscribe(
//       (data: Sector) => {
//         // console.log('dataa');
//         // console.log(data);
//
//         let viewData: ViewSector = {
//           id: data.id,
//           name: data.name,
//           numSector: data.numSector,
//           describe: data.describe,
//           mapPoint: data.mapPoint,
//           pictures: [],
//           massiveId: data.massiveId,
//           climbingRoutes: [],
//           isOpen: false
//         }
//         data.pictures.forEach(p=>{
//           viewData.pictures.push(p);
//         });
//
//         data.climbingRoutes
//           .sort((a, b) => {
//           const numA = parseFloat(a.numRouter || '');
//           const numB = parseFloat(b.numRouter || '');
//           return numA - numB;
//           })
//           .forEach(c => {
//           let vcr: ViewClimbingRoute = {
//             id: c.id,
//             name: c.name,
//             describe: c.describe,
//             mapPoint: c.mapPoint,
//             mapVidget: c.mapVidget,
//             picture: c.picture,
//             sectorsId: c.sectorsId,
//             category: c.category,
//             testimonial: c.testimonial,
//             boltCount: c.boltCount,
//             numRouter: c.numRouter,
//             type: c.type,
//             height: c.height,
//             bolt: c.bolt,
//             isOpen: false
//           }
//           viewData.climbingRoutes.push(vcr)
//         })
//         this.sectorData = viewData;
//       },
//       (error) => {
//         console.error('Error fetching sector data:', error);
//       }, () => {
//         // console.log('comp')
//       }
//     );
//   }
//
// // Функция для подсчета количества трасс по каждой категории
//   countRoutesByCategory() {
//     const categoryCounts: { [key: string]: number } = {
//       '5a': 0,
//       '5b': 0,
//       '5c': 0,
//       '6a': 0,
//       '6b': 0,
//       '6c': 0,
//       '7a': 0,
//       '7b': 0,
//       '7c': 0,
//       '8a': 0,
//       '8b': 0 // и выше
//     };
//
//     // Проверка, если данные о секторе и маршрутах существуют
//     if (!this.sectorData || !this.sectorData.climbingRoutes) return categoryCounts;
//
//     this.sectorData.climbingRoutes.forEach(route => {
//       let category = route.category?.trim() || ''; // Убираем пробелы в начале и конце
//
//       // Учитываем категории с плюсом (5a+, 6b+) и приводим их к стандартным
//       if (category.endsWith('+')) {
//         category = category.slice(0, -1);
//       }
//
//       // Проверяем, что категория соответствует одному из значений
//       switch (category) {
//         case '5':
//         case '5a':
//           categoryCounts['5a']++;
//           break;
//         case '5b':
//           categoryCounts['5b']++;
//           break;
//         case '5c':
//           categoryCounts['5c']++;
//           break;
//         case '6a':
//           categoryCounts['6a']++;
//           break;
//         case '6b':
//           categoryCounts['6b']++;
//           break;
//         case '6c':
//           categoryCounts['6c']++;
//           break;
//         case '7a':
//           categoryCounts['7a']++;
//           break;
//         case '7b':
//           categoryCounts['7b']++;
//           break;
//         case '7c':
//           categoryCounts['7c']++;
//           break;
//         case '8a':
//           categoryCounts['8a']++;
//           break;
//         // Все категории выше 8b будут считаться в категорию '8b'
//         default:
//           if (category.startsWith('8') || parseFloat(category) > 8) {
//             categoryCounts['8b']++;
//           }
//           break;
//       }
//     });
//
//     return categoryCounts;
//   }
//
//
//   // Функция отброса 0 значений
//
//   getNonZeroCategories(): string[] {
//     const categoryCounts = this.countRoutesByCategory();
//     return Object.keys(categoryCounts).filter(category => categoryCounts[category] > 0);
//   }
//
//
//   toggleZoom(pictureId: string) {
//     this.selectedPictureId = this.selectedPictureId === pictureId ? null : pictureId;
//     //console.log(this.isZoomed);
//   }
//
//   toggleDescriptionSector(viewSector: ViewSector) {
//     viewSector.isOpen = !viewSector.isOpen
//   }
//
//   toggleDescriptionClimbingRoute(viewRoute: ViewClimbingRoute) {
//     viewRoute.isOpen = !viewRoute.isOpen
//   }
//
// }
//
