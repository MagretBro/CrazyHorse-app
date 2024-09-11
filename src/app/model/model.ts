
// массив скальных стран
// массив скальных регионов
// массив Sector


// массив скальных стран
export class Country {
  id: number = 100;
  name: string="";
  geo: string="";
  map?: string="";
  images?: string[] = [];
  information?: string="";
  Region: Region[]=[];
}


// массив скальных массивов внутри страны, как CrazyHorse
export class Region {
  id: number = 1000;
  name: string="";
  geo: string="";
  map?: string="";
  images?: string[] = [];
  information?: string="";
  countryId: Country[] = [];
  SectorsId: Sector[]=[];
}


export class Massive {
  id: number = 1000;
  name: string="";
  geo: string="";
  map?: string="";
  images?: string[] = [];
  describe?: string = "";       // Описание, не обязательное поле
  regionId?: number = 0;        // ID региона, если указан
  region?: any;                 // Связанная информация о регионе, может быть объектом
  sectors?: any[] = [];         // Связанные секторы (массив)
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


// Массив секторов на скале/массиве
export class Sector {
  id: number = 10000;
  name: string="";
  geo: string=""; // тут строка линка гугл мапс
  map?: string=""; // тут сам виджет карты если нужно
  images?: string[] = [];
  information?: string="";
  countryId: Country[] = [];
  SectorsId: Sector[]=[];
  RegionId: Region[]=[];
}

export class ClimbingRoute {
  id: number = 100000;
  name: string = "";
  geo: string = ""; // строка линка гугл мапс
  map?: string = ""; // виджет карты, если нужно
  images?: string[] = [];
  information?: string = "";
  countryId: Country[] = [];
  RegionId: Region[] = [];
  SectorsId: Sector[] = [];

  massive: string = ""; // Название массива или скалы
  sector: string = ""; // Название сектора
  numOfSector: number = 0; // Номер сектора
  category: string = ""; // Категория сложности
  height: string = ""; // Высота маршрута
  count: number = 0; // Количество чего-то (например, шагов или длины)
  countOfBolts: string = ""; // Количество болтов и/или резьб
}


export class MountainNameResultModel {
  id: number = 119;
  name?: string="";
  images?: string[] = [];
}
