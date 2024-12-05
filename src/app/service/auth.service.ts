import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { LoginResponse } from "../model/model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = '';
  private  authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private  http: HttpClient) { }

  login(credentials: { username: string; password: string}): Observable<any>  {
    return this.http.post('http://localhost:5025/api/auth/login', credentials);
  }

  register(user: { username: string; password: string}) {
    return this.http.post(`${this.baseUrl}/register`, user)
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
    this.authStatus.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  logout() {
    localStorage.removeItem('authToken');
    this.authStatus.next(false);
  }

  getAuthStatus() {
    return this.authStatus.asObservable();
  }
}
