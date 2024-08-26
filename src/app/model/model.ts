
// массив скальных стран
// массив скальных регионов
// массив RockSector


// массив скальных стран
export class Country {
  id: number = 100;
  name: string="";
  geo: string="";
  map?: string="";
  imageUrl?: string;
  information?: string="";
  rockRegion: RockRegion[]=[];
}


// массив скальных массивов внутри страны, как CrazyHorse
export class RockRegion {
  id: number = 1000;
  name: string="";
  geo: string="";
  map?: string="";
  imageUrl?: string;
  information?: string="";
  countryId: Country[] = [];
  rockSectorsId: RockSector[]=[];
}

export class ClimberGym {
  id: number = 99;
  name: string="";
  geo: string="";
  value: string="Режим работы";
  information?: string="";
  countryId: Country[] = [];
  imageUrl?: string;
}


// Массив секторов на скале/массиве
export class RockSector {
  id: number = 10000;
  name: string="";
  geo: string=""; // тут строка линка гугл мапс
  map?: string=""; // тут сам виджет карты если нужно
  imageUrl?: string;
  information?: string="";
  countryId: Country[] = [];
  rockSectorsId: RockSector[]=[];
  RockRegionId: RockRegion[]=[];
}

export class Route {
  id: number = 100000;
  name: string = "";
  geo: string = ""; // строка линка гугл мапс
  map?: string = ""; // виджет карты, если нужно
  imageUrl?: string;
  information?: string = "";
  countryId: Country[] = [];
  RockRegionId: RockRegion[] = [];
  rockSectorsId: RockSector[] = [];

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
  imageUrl?: string; // Добавляем свойство для хранения пути к изображению
}
