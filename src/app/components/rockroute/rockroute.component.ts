

import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClimbingRoute, Massive} from "../../model/model";
import {ClimbingRouteService} from "../../service/climbing-route.service";
@Component({
  selector: 'app-rockroute',
  templateUrl: './rockroute.component.html',
  styleUrls: ['./rockroute.component.scss']
})


export class RockrouteComponent implements OnInit {
  fontStyleControl = new FormControl('');
  isZoomed: boolean = false;
  isMobile: boolean = false;
  climbingRoutes: ClimbingRoute[] = [];
  totalCategory: number = 0;
  countForSectorId: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  constructor(
    private crs: ClimbingRouteService
  ) {
  }


  ngOnInit(): void {
    this.checkIfMobile();
    this.crs.getClimbingRoutes().subscribe((data: ClimbingRoute[]) => {
      this.climbingRoutes = data;
      console.log('thisdata', data);
    }, (error) => {
      console.log('thiserror', error);
    }, () => {
      console.log('comp');
    });

    // Подсчет общего количества секторов
    this.totalCategory = this.climbingRoutes.length;

    // Подсчет количества секторов с определенным MassiveId
    //this.countForSectorId = this.climbingRoutes.filter(climbingRoute => ClimbingRoute.SectorId === 'fe2306c7-fc38-4b7f-8922-bfd0d62523da').length;

    // Подсчет суммы поля NumSector
    //const sumNumCategory = this.sectors.reduce((sum, sector) => sum + (sector.NumSector || 0), 0);
    //console.log('Сумма NumSector:', sumNumSector);
  }


  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isZoomed = true; // На мобильном устройстве картинка сразу увеличена
    } else {
      this.isZoomed = false; // На ПК картинка в исходном размере
    }
  }

  toggleZoom() {
    if (!this.isMobile) {
      this.isZoomed = !this.isZoomed;
    }
  }


}

