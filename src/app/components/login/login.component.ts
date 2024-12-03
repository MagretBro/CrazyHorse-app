import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import  { LoginResponse } from "../../model/model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credentials = { username: '', password: ''};
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }
  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (response: LoginResponse) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = 'Wrong login credentials';
      },
    });
  }
}
