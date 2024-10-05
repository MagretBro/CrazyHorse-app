import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sector} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'http://localhost:5000/api/services';
  constructor(private http: HttpClient) { }
  getSectors(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.apiUrl);
  }
  getSector(id: number): Observable<Sector> {
    return this.http.get<Sector>(`${this.apiUrl}/${id}`);
  }
  createSector(sector: Sector): Observable<Sector>{
    return this.http.post<Sector>(this.apiUrl, sector);
  }

  updateSector(id: number, sector: Sector): Observable<Sector> {
    return this.http.put<Sector>(`${this.apiUrl}/${id}`, sector);
  }

  deleteSector(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}