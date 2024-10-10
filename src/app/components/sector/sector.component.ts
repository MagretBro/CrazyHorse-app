import {Component, OnInit} from '@angular/core';
import {Sector, Picture} from "../../model/model";
import {SectorService} from "../../service/sector.service";
import {ActivatedRoute, Router} from "@angular/router";
import  { PictureService } from "../../service/picture.service";

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})

export class SectorComponent implements OnInit{
  sectorId!: string;
  sectorData: Sector | null = null;
  selectedPictureId: string | null = null;  // Добавляем переменную для хранения ID выбранной картинки
  isZoomed: boolean = false;
  pictures: Picture[] = [];

  constructor(
    private sectorService: SectorService,
    private pictureService: PictureService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.sectorId = this.route.snapshot.paramMap.get('id')!;
    await this.getSectorData();
    //await this.getPictures();
  }

  async getSectorData() {
    this.sectorService.GetSectorById(this.sectorId).subscribe(
      (data: Sector) => {
        this.sectorData = data;
        console.log('this.sectorData');
        console.log(this.sectorData);
        this.sectorData.pictures?.forEach(p=>{
          // let path: string = './assets/hw/'+ p;
          let path: string = './assets/hw/heartwall01.jpeg';
          console.log('./assets/hw/heartwall01.jpeg');
        })
      },
      (error) => {
        console.error('Error fetching sector data:', error);
      }, ()=>{
        console.log('comp')
      }
    );
  }

  toggleZoom(pictureId: string) {
    this.selectedPictureId = this.selectedPictureId === pictureId ? null: pictureId;
    //console.log(this.isZoomed);
  }


}



// getPictures() {
//   this.pictureService.getPicturesByParentId(this.sectorId).subscribe(
//     (data: Picture[]) => {
//       this.pictures = data;
//       console.log(this.pictures);
//     },
//     (error) => {
//       console.error('Error fetching pictures:', error);
//     }
//   );
// }

