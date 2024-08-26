import { Injectable } from '@angular/core';
import {RockSector} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class RocksectorService {

  private sectorExample: RockSector = {
    id: 10000,
    idMountaine: 1,
    name: "The Gatekeeper Buttress",
    geo: "", // здесь строка линка на Google Maps
    map: "", // виджет карты, если нужно
    imageUrl: "", // URL изображения
    information: "Это регион The Gatekeeper Buttress",
    countryId: [], // массив стран
    rockSectorsId: [], // массив секторов
    RockRegionId: [], // массив регионов
    routes: [
      {
        id: 1,
        name: "Heun Fah / Ascending the Sky",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Rooftop",
        numOfSector: 1,
        category: "5b",
        height: "21m",
        count: 7,
        countOfBolts: "5 bolts and 2 threads"
      },
      {
        id: 2,
        name: "A Route with a View",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Rooftop",
        numOfSector: 2,
        category: "5c+",
        height: "22m",
        count: 10,
        countOfBolts: "8 bolts and 2 threads"
      },
      {
        id: 3,
        name: "Skyscraper",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Rooftop",
        numOfSector: 3,
        category: "6a+",
        height: "29m",
        count: 11,
        countOfBolts: "11 bolts"
      },
      {
        id: 4,
        name: "The Keymaster",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Gatekeeper Buttress",
        numOfSector: 1,
        category: "Sport",
        height: "25m",
        count: 14,
        countOfBolts: ""
      },
      {
        id: 5,
        name: "The Gatekeeper",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Gatekeeper Buttress",
        numOfSector: 2,
        category: "6b",
        height: "25m",
        count: 9,
        countOfBolts: "8 bolts and 1 thread"
      },
      {
        id: 6,
        name: "Inferno",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Gatekeeper Buttress",
        numOfSector: 3,
        category: "7a",
        height: "29m",
        count: 10,
        countOfBolts: "9 bolts and 1 thread"
      },
      {
        id: 7,
        name: "Unleash the Phat Physique",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Gatekeeper Buttress",
        numOfSector: 4,
        category: "7a",
        height: "28m",
        count: 10,
        countOfBolts: "9 bolts and 1 thread"
      },
      {
        id: 8,
        name: "All Quiet on the Eastern Front",
        geo: "",
        map: "",
        imageUrl: "",
        information: "",
        countryId: [],
        rockSectorsId: [],
        RockRegionId: [],
        massive: "The Crazy Horse Buttress",
        sector: "The Gatekeeper Buttress",
        numOfSector: 5,
        category: "7a",
        height: "24m",
        count: 9,
        countOfBolts: "8 bolts and 1 thread"
      }
    ]
  };


  constructor() { }
}
