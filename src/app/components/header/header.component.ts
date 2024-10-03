import { Component, OnInit } from '@angular/core';
import {CountryService} from "../../service/country.service";
import {Country} from "../../model/model";
import {Region} from "../../model/model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  tcountries: Country[] = [];  // Массив для хранения стран

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    // При инициализации компонента загружаем страны с помощью сервиса
    this.countryService.getCountries().subscribe(
      (countries) => {
        this.tcountries = countries;
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    );
  }


//  Генин оригинал
  // async ngOnInit() {
  //   await this.countryService.getCountries().then(res2=>{
  //     console.log("res2");
  //     console.log(res2);
  //     res2.subscribe(n=>{console.log(n)}, er=>{console.log(er)}, ()=>{
  //       console.log(this);
  //     });
  //   })
  //
  // }


}
