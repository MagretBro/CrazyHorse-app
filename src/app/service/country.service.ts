import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from "../model/model";

@Injectable({
  providedIn: 'root'  // Сервис будет доступен во всем приложении
})
export class CountryService {

  // private apiUrl = 'http://localhost:5137/api/country';  // URL к вашему API
  private apiUrl = 'http://localhost:5025/api/Countries';  // URL к вашему API

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);  // Возвращает список стран с регионами
  }

  // Пока в блоке. тестирую код строк 16-18
  // Получить список стран
  // async getCountries() {
  //  let res = this.http.get<Country[]>('http://localhost:5025/api/Countries');
  //  console.log("res");
  //   console.log(res);
  //   return res;
  // }

  // выше пока в блоке
  getCountriesRegionsMenuList(): Observable<Country[]> {
    let res =  this.http.get<Country[]>('http://localhost:5137/api/GetRegionsMenuList');
    console.log(res);
    return res;
  }

  // Получить одну страну по ID
  getCountry(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }

  // Создать новую страну
  createCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, country);
  }

  // Обновить данные страны
  updateCountry(id: number, country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${id}`, country);
  }

  // Удалить страну
  deleteCountry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
