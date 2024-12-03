import {HttpInterceptorFn, HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AuthService } from "./service/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private  authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req);
  }
}
