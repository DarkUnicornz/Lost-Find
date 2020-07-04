import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from './../config/app-config';
import { User } from './../models/user.model';
import { Post } from './../models/post.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // user: any;
  success: boolean;

  constructor(
    private http: HttpClient,
  ) { }
  // *****************************************

  register(user): Observable<any> {
    return this.http.post(AppConfig.BASE_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  // *****************************************

  registerUser(user: User) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(AppConfig.BASE_URL + 'register', user, { headers}).pipe();
  }

  authenticateUser(user: { email: string; password: string; }) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(AppConfig.BASE_URL + 'authenticate', user, { headers }).pipe();
  }

  sendPost(post: Post){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    //fake url(because backend function implement not yet)
    return this.http.post(AppConfig.BASE_URL + 'register', post, { headers}).pipe();

  }
  // : Observable<any>
}
