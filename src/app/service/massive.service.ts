import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Massive } from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class MassiveService {
  private apiUrl = 'http://localhost:5000/api/massives';
  constructor(private http: HttpClient) {}
  getMassives(): Observable<Massive[]> {
    return this.http.get<Massive[]>(this.apiUrl)
  }

  getMassive(id: number): Observable<Massive> {
    return this.http.get<Massive>(`${this.apiUrl}/${id}`);
  }

  createMassive(region: Massive): Observable<Massive>{
    return this.http.post<Massive>(this.apiUrl, region);
  }


}
