
// массив скальных стран
// export class Country {
//   id: number | undefined;
//   region: Region[]=[];
//   name: string="";
//   geo?: string="";
//   map?: string="";
//   images?: string[] = [];
//   information?: string="";
//
// }


// массив скальных массивов внутри страны, как CrazyHorse
// export class Region {
//   id: number = 1000;
//   name: string="";
//   images?: string[] = [];
//   countryId: Country[] | undefined;
//   massiveId: Massive[] = [];
//   SectorsId: Sector[]=[];
//   geo?: string="";
//   map?: string="";
//   information?: string="";
// }

export interface Region {
  id: number;
  name: string;
  countryId: number;
}

export interface Country {
  id: number;
  name: string;
  regions: Region[];
}

export class Massive {
  id: number = 1000;
  name: string="";
  geo: string="";
  map?: string="";
  images?: string[] = [];
  describe?: string = "";       // Описание, не обязательное поле
  regionId?: number = 0;
  region?: any;
  SectorsId: Sector[]=[];
}


// Массив секторов на скале/массиве
export class Sector {
  id: number = 10000;
  name: string="";
  information: string="";
  geo: string=""; // тут строка линка гугл мапс
  map?: string=""; // тут сам виджет карты если нужно
  images?: string[] = [];
  massiveId: Massive[] = [];
  climbingRoute: ClimbingRoute[] = [];

  // countryId: Country[] = [];
  // SectorsId: Sector[]=[];
  // RegionId: Region[]=[];
}

export class ClimbingRoute {
  id: number = 100000;
  name: string = "";
  geo?: string = ""; // строка линка гугл мапс
  map?: string = ""; // виджет карты, если нужно
  images?: string[] = [];
  information?: string = "";
  // countryId: Country[] = [];
  // RegionId: Region[] = [];
  SectorsId: Sector[] = [];

  // massive: string = ""; // Название массива или скалы
  // sector: string = ""; // Название сектора
  // numOfSector: number = 0; // Номер сектора
  category: string = ""; // Категория сложности
  testimonial: string = ""; // Высота маршрута
  boltCount: number = 0; // Количество болтов, threads
}


export class MountainNameResultModel {
  id: number = 119;
  name?: string="";
  images?: string[] = [];
}



// export class ClimberGym {
//   id: number = 99;
//   name: string="";
//   geo: string="";
//   value: string="Режим работы";
//   information?: string="";
//   countryId: Country[] = [];
// images?: string[] = [];
// }
