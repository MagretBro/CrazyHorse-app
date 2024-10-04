import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../service/country.service";
import {Country} from "../../model/model";
import {MassiveService} from "../../service/massive.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  menuItems: Country[] = [];


  constructor(
    private countryService: CountryService,
    private router: Router,
    private massiveService: MassiveService) {}

  ngOnInit(): void {
    // При инициализации компонента загружаем страны с помощью сервиса
    this.countryService.getCountries().subscribe(
      (countries) => {
        this.menuItems = countries;
        console.log(this.menuItems);
        //this.extractUniqueRegions();
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    );
  }

  goToMassive(massiveId: string): void {
    this.router.navigate(['/massive', massiveId]);
  }
}

