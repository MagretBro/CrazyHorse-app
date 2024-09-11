import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Region} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = 'http://localhost:5000/api/regions';  // URL к вашему API

  constructor(private http: HttpClient) {}

  // Получить список стран
  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl);
  }

  // Получить одну страну по ID
  getRegion(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/${id}`);
  }

  // Создать новую страну
  createRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(this.apiUrl, region);
  }

  // Обновить данные страны
  updateRegion(id: number, region: Region): Observable<Region> {
    return this.http.put<Region>(`${this.apiUrl}/${id}`, region);
  }

  // Удалить страну
  deleteRegion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
