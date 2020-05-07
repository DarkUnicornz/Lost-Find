import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from './../config/app-config';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: any;

  constructor(
    private http: HttpClient,
  ) { }

  registerUser(user: User) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(AppConfig.BASE_URL + 'register', user, { headers: headers }).pipe();
  }

  authenticateUser(user: { username: string; password: string; }): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(AppConfig.BASE_URL + 'RegistrationController/authenticate', user, { headers: headers }).pipe();
  }

}
