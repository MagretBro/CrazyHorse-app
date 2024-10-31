// /////// 2 version
import {Component, OnInit} from '@angular/core';
import {Sector, Picture, Massive, ClimbingRoute} from "../../model/model";
import {SectorService} from "../../service/sector.service";
import {ClimbingRouteService} from "../../service/climbing-route.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PictureService} from "../../service/picture.service";


class ViewClimbingRoute extends ClimbingRoute {
  isOpen: boolean=false;
}
class ViewSector extends Sector {
  isOpen: boolean=false;
  override climbingRoutes: ViewClimbingRoute[] = [];
}

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})

export class SectorComponent implements OnInit {
  sectorId!: string;
  sectorData: ViewSector | null = null;
  selectedPictureId: string | null = null;  // Добавляем переменную для хранения ID выбранной картинки
  isZoomed: boolean = false;
  pictures: Picture[] = [];

  constructor(
    private sectorService: SectorService,
    private pictureService: PictureService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  async ngOnInit() {
    this.sectorId = this.route.snapshot.paramMap.get('id')!;
    await this.getSectorData();
    //await this.getPictures();
  }
  async getSectorData() {
    this.sectorService.GetSectorById(this.sectorId).subscribe(
      (data: Sector) => {
        console.log('dataa');
        console.log(data);

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
        }
        data.pictures.forEach(p=>{
          viewData.pictures.push(p);
        });

        data.climbingRoutes
          .sort((a, b) => (a.numRouter || '').localeCompare(b.numRouter || ''))
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
            isOpen: false
          }
          viewData.climbingRoutes.push(vcr)
        })

        this.sectorData = viewData;
        // console.log('this.sectorData');
        // console.log(this.sectorData);
      },
      (error) => {
        console.error('Error fetching sector data:', error);
      }, () => {
        console.log('comp')
      }
    );
  }

  toggleZoom(pictureId: string) {
    this.selectedPictureId = this.selectedPictureId === pictureId ? null : pictureId;
    //console.log(this.isZoomed);
  }

  toggleDescriptionSector(viewSector: ViewSector) {
    viewSector.isOpen = !viewSector.isOpen
  }

  toggleDescriptionClimbingRoute(viewRoute: ViewClimbingRoute) {
    viewRoute.isOpen = !viewRoute.isOpen
  }

}


///////// 1 version


//
// import {Component, OnInit} from '@angular/core';
// import {Sector, Picture, Massive, ClimbingRoute} from "../../model/model";
// import {SectorService} from "../../service/sector.service";
// import {ClimbingRouteService} from "../../service/climbing-route.service";
// import {ActivatedRoute, Router} from "@angular/router";
// import {PictureService} from "../../service/picture.service";
//
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
//     //await this.getPictures();
//   }
//   async getSectorData() {
//     this.sectorService.GetSectorById(this.sectorId).subscribe(
//       (data: Sector) => {
//         let viewData: ViewSector = {
//           id: data.id,
//           name: data.name,
//           numSector: data.numSector,
//           information: data.information,
//           geo: data.geo,
//           map: data.map,
//           pictures: [],
//           massiveId: data.massiveId,
//           climbingRoutes: [],
//           isOpen: false
//         }
//         data.pictures.forEach(p=>{
//           viewData.pictures.push(p);
//         });
//
//         data.climbingRoutes.forEach(c => {
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
//             isOpen: false
//           }
//           viewData.climbingRoutes.push(vcr)
//         })
//
//         this.sectorData = viewData;
//         console.log('this.sectorData');
//         console.log(this.sectorData);
//       },
//       (error) => {
//         console.error('Error fetching sector data:', error);
//       }, () => {
//         console.log('comp')
//       }
//     );
//   }
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
// }
//
//
