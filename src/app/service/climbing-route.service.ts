import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClimbingRoute} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class ClimbingRouteService {

  private apiUrl = 'http://localhost:5000/api/climbingroute';
  constructor(private http: HttpClient) { }
  getClimbingRoutes(): Observable<ClimbingRoute[]> {
    return this.http.get<ClimbingRoute[]>(this.apiUrl);
  }
  getClimbingRoute(id: number): Observable<ClimbingRoute> {
    return this.http.get<ClimbingRoute>(`${this.apiUrl}/${id}`);
  }
  createClimbingRoute(climbingroute: ClimbingRoute): Observable<ClimbingRoute>{
    return this.http.post<ClimbingRoute>(this.apiUrl, climbingroute);
  }

  updateClimbingRoute(id: number, climbingRoute: ClimbingRoute): Observable<ClimbingRoute> {
    return this.http.put<ClimbingRoute>(`${this.apiUrl}/${id}`, climbingRoute);
  }

  deleteClimbingRoute(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
