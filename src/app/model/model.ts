
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
  id: string;
  name: string;
  countryId: number;
  massives: Massive[];
}

export interface Country {
  id: string;
  name: string;
  regions: Region[];
}

export class Massive {
  id: string | undefined;
  name: string="";
  geo: string="";
  map?: string="";
  picture?: string[] = [];
  describe?: string = "";       // Описание, не обязательное поле
  regionId?: number = 0;
  region?: any;
  sectors: Sector[]=[];
}


// Массив секторов на скале/массиве
export class Sector {
  id: string | undefined;
  name: string="";
  information: string="";
  geo: string=""; // тут строка линка гугл мапс
  map?: string=""; // тут сам виджет карты если нужно
  pictures?: Picture[] = [];
  massiveId: Massive[] = [];
  climbingRoutes: ClimbingRoute[] = [];

  // countryId: Country[] = [];
  // SectorsId: Sector[]=[];
  // RegionId: Region[]=[];
}

export class ClimbingRoute {
  id: string | undefined;
  name: string = "";
  describe?: string = "";

  mapPoint?: string = ""; // строка линка гугл мапс
  mapVidget?: string = ""; // виджет карты
  picture?: string[] = [];
  sectorsId: Sector[] = [];
  category: string = ""; // Категория сложности
  testimonial: string = ""; // Тип, высота, число шлямбуров
  boltCount: number = 0; // Количество болтов, threads
  // countryId: Country[] = [];
  // RegionId: Region[] = [];
  // massive: string = ""; // Название массива или скалы
  // sector: string = ""; // Название сектора
  // numOfSector: number = 0; // Номер сектора
}

export class MountainNameResultModel {
  id: number = 119;
  name?: string="";
  picture?: string[] = [];
}

export class Picture {
  id: string = "";
  parentId: string= "";
  name: string = "";
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
