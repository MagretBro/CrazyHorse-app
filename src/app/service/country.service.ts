import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from "../model/model";

@Injectable({
  providedIn: 'root'  // Сервис будет доступен во всем приложении
})
export class CountryService {

  private apiUrl = 'http://localhost:5000/api/countries';  // URL к вашему API

  constructor(private http: HttpClient) {}

  // Получить список стран
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
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
