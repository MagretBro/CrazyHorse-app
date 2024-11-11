
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
  numSector: string="";
  describe?: string = "";       // Описание, не обязательное поле
  mapPoint?: string=""; // тут сам виджет карты если нужно
  pictures: Picture[] = [];
  massiveId?: string;
  climbingRoutes: ClimbingRoute[] = [];
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
  numRouter: string = "";
  type:  string = "";
  height:  string = "";
  bolt:  string = "";
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
