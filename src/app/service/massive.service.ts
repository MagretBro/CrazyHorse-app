import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Massive, Region, Sector} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class MassiveService {
  private apiUrl = 'http://localhost:5025/api/Massives';  // URL к вашему API

  constructor(private http: HttpClient) {}

  // Получение массивов по региону
  getMassivesByRegion(regionId: string): Observable<Massive[]> {
    return this.http.get<Massive[]>(`${this.apiUrl}/region/${regionId}`);
  }

  GetMassiveById(massiveId: string): Observable<Massive> {
    return this.http.get<Massive>(`${this.apiUrl}/massive/${massiveId}`);
  }

}
