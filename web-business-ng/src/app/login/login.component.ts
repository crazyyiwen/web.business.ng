import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ProgressService } from '../shared/load/progress.service';
import { AuthService } from '../shared/authService/auth.service';
import { RegisterPayload, LoginPayload, IUser } from './model/model'
import { ConstantService } from '../shared/global/constant.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  helper = new JwtHelperService();
  registerForm = new FormGroup({
    userName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    repeatPassword: new FormControl()
  });

  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });

  public isLogin: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private progressService: ProgressService,
    private authService: AuthService,
    private router: Router,
    private constantService: ConstantService
  ) {
     
  }

  ngOnInit(): void {

  }

  onRegister(){
    let registerPayload: RegisterPayload = new RegisterPayload(
      this.registerForm.value['userName'],
      this.registerForm.value['email'],
      this.registerForm.value['password']
    );
    const registerObserver = {
      next: (res: any) => {
        this.progressService.setSuccess();
        this.router.navigate(['/home'],{});
      },
      error: (error: any) => {
        this.progressService.setFailure();
      }
    }
    this.authService.loginAndRegister(registerPayload, 'Identity/register').subscribe(registerObserver);
  }

  onLogin(){
    let loginPayload: LoginPayload = new LoginPayload(
      this.loginForm.value['userName'],
      this.loginForm.value['password']
    );
    const registerObserver = {
      next: (res: any) => {
        const decodedToken = this.helper.decodeToken(res.token);
        this.setTokenToLocalStorage(res.token);
        this.progressService.setSuccess();
        this.constantService.setHttpOptions();
        this.router.navigate(['/home'],{});
      },
      error: (error: any) => {
        this.progressService.setFailure();
      }
    }
    this.authService.loginAndRegister(loginPayload, 'Identity/login').subscribe(registerObserver);
  }

  loggedIn(): boolean{
    const _token = this.getTokenFromLocalStorage();
    return !this.helper.isTokenExpired(_token);
  }

  setTokenToLocalStorage(_token:string){
    localStorage.setItem('token', _token);
  }

  getTokenFromLocalStorage(){
    return localStorage.getItem('token');
  }
}
