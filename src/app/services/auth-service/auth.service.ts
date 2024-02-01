
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';

export enum AuthEndPoint {
  REGISTER_USER = '/user/auth/register',
  LOGIN_USER = '/user/auth/login',
  VERIFY_EMAIL = '/user/auth/verify',
  FORGOT_PASSWORD = '/user/auth/forgot-password',
  UPDATE_USER_LUDO_NAME = "/user/update-ludo-name",
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.baseUrl = environment.baseUrl;
  }

  registerUser(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.REGISTER_USER, payload);
  }

  login(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.LOGIN_USER, payload);
  }

  logout(): void {
    this.localStorageService.clearStorage();
    this.router.navigateByUrl('/');
  }

  verifyEmail(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.VERIFY_EMAIL, payload);
  }

  forgotPassword(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.FORGOT_PASSWORD, payload);
  }

  // update user ludo name
  updateLudoName(payload: any) :Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.UPDATE_USER_LUDO_NAME, payload);
  }
}
