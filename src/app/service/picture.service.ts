import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Picture} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private  baseUrl = 'http://localhost:5025/api/Pictures';

  constructor(private  http: HttpClient) { }

  getPicturesByParentId(parentId: string): Observable<Picture[]> {
    return this.http.get<Picture[]>(`${this.baseUrl}?parentId=${parentId}`);
  }
}
