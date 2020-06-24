import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

import { AppConfig } from './../config/app-config';
import { User } from './../models/user.model';
import { Post } from './../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // user: any;
  success: boolean;

  constructor(
    private http: HttpClient,
  ) { }

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

  // sendPost(post: Post){
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   //fake url
  //   return this.http.post(AppConfig.BASE_URL + 'register', post, { headers}).pipe();
    
  // }  
  // : Observable<any>
}
