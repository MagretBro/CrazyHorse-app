import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClimbingRoute, Sector} from "../model/model";
import {AuthService} from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private apiUrl = 'http://localhost:5025/api/Sectors';  // URL к вашему API

  constructor(private http: HttpClient) {
  }

  GetAllSectors(): Observable<Sector[]> {
    return this.http.get<Sector[]>(`${this.apiUrl}`);
  }
  GetSectorById(sectorId: string): Observable<Sector> {
    let res = this.http.get<Sector>(`${this.apiUrl}/sector/${sectorId}`);
    return res;
  }

  getRouteCountsForAllSectorsByCategory(sectorId: string) {
    return this.http.get<{[key: string]: number}>(`${this.apiUrl}/${sectorId}/routeCountsForAllSectorsByCategory`);
  }

  getListSectorsByMassiveId(id: string): Observable<Sector[]> {
    let res = this.http.get<Sector[]>(`http://localhost:5025/api/Massives/getListSectorsByMassiveId/${id}`);
    return res;
  }

  addSector(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(`${this.apiUrl}`, sector, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteSector(sectorId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${sectorId}`);
  }


}









