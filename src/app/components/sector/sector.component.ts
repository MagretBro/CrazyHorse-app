import { Component, OnInit } from '@angular/core';
import { Sector, Picture, ClimbingRoute } from "../../model/model";
import { SectorService } from "../../service/sector.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PictureService } from "../../service/picture.service";
import { AuthService } from "../../service/auth.service";

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
  events: string[] = [];
  opened?: boolean;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);


  ///// Add new Sector method
  isAuthenticated: boolean = false; // Показывает, авторизован ли пользователь

  // Пример данных для добавления сектора
  newSector: Sector = {
    id: '',
    name: '',
    numSector: '',
    describe: '',
    mapPoint: '',
    massiveId: '',
    pictures: [],
    climbingRoutes: []
  };
  showModal: boolean = false; // Управление видимостью модального окна
  isAdding: boolean = true; // Определяет, что пользователь хочет: добавить или удалить сектор
  selectedSectorId: string = ''; // Для удаления сектора


  ///// Add new Sector method





  constructor(
    private sectorService: SectorService,
    private pictureService: PictureService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService // Добавлено AuthService

) {}

  async ngOnInit() {
    this.sectorId = this.route.snapshot.paramMap.get('id')!;
    await this.getSectorData();
    this.getRouteCountsForAllSectorsByCategory(); // Вызов метода для получения категорий с бэкенда
    this.getAllSectors();
    this.checkAuthStatus();

  }

  // Проверка, авторизован ли пользователь
  checkAuthStatus() {
    this.isAuthenticated = this.authService.isAuthenticated(); // Метод AuthService для проверки авторизации
  }

  // Открытие модального окна
  openModal(isAdding: boolean, sectorId: string = '') {
    this.isAdding = isAdding;
    this.selectedSectorId = sectorId;
    this.showModal = true;
  }

  // Закрытие модального окна
  closeModal() {
    this.showModal = false;
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
        // console.log("resLIST");
        // console.log(res);


        this.listSectors = res
          .slice() // Создаем копию массива
          .sort((a, b) => {
            const numA = parseFloat(a.numSector || '0');
            const numB = parseFloat(b.numSector || '0');
            return numA - numB;
          });
        //console.log("Отсортированный список секторов:", this.listSectors);
      },
      error => console.error('Ошибка при получении списка секторов:', error)
    );
  }


  async onSectorPage(sectorId: string | undefined) {

    if(sectorId === undefined) {
      return;
    }
    this.sectorId = sectorId;
    await this.router.navigate(['/sector', sectorId]);
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
        // console.log('this.sectorData');
        // console.log(this.sectorData);
        this.getAllSectors();
      },
      error => {
        console.error('Error fetching sector data:', error);
      }
    );
  }

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

  getImagePath(parentId: string | undefined, name: string): string {
    if (!parentId || !name) {
      console.warn("")
      return '';
    }

    const imagePath = `./assets/${parentId}/${name}.jpg`;

    return imagePath;
  }


  ///// Add new Sector method


  // Добавление нового сектора
  async addNewSector() {
    if (!this.sectorData?.massiveId) {
      console.error('Отсутствует massiveId для добавления сектора');
      return;
    }
    this.newSector.massiveId = this.sectorData.massiveId;

    this.sectorService.addSector(this.newSector).subscribe(
      () => {
        this.getAllSectors(); // Обновить список
        this.closeModal();
      },
      error => console.error('Ошибка при добавлении сектора:', error)
    );
  }
  // Метод для удаления сектора

  deleteSector() {
    if (!this.selectedSectorId) {
      console.error('Не выбран сектор для удаления');
      return;
    }

    this.sectorService.deleteSector(this.selectedSectorId).subscribe(
      () => {
        this.getAllSectors(); // Обновить список
        this.closeModal();
      },
      error => console.error('Ошибка при удалении сектора:', error)
    );
  }
    ///// Add new Sector method


}

