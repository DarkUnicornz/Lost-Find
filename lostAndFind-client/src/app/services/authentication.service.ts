import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppConfig } from './../config/app-config';
import { User } from './../models/user.model';
import { Post } from './../models/post.model';
import { TokenStorageService } from './../services/token-storage.service';

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
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) { }
  // *****************************************

  register(user): Observable<any> {
    console.log('aaaaaaa =' + user);
    return this.http.post(AppConfig.BASE_URL + 'auth/signup', {
      nic: user.nic,
      username: user.username,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      phone: user.phone,
      address: user.address,
      bDay: user.bDay,
      gender: user.gender,
      password: user.password,
    }, httpOptions);
  }


  adminRegister(user): Observable<any> {
    console.log('aaaaaaa =' + user);
    return this.http.post(AppConfig.BASE_URL + 'auth/signup', {
      nic: user.nic,
      username: user.username,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      phone: user.phone,
      // address: user.address,
      // bDay: user.bDay,
      gender: user.gender,
      password: user.password,
      role: ['admin'],
    }, httpOptions);
  }

  modRegister(user): Observable<any> {
    console.log('aaaaaaa =' + user);
    return this.http.post(AppConfig.BASE_URL + 'auth/signup', {
      nic: user.nic,
      username: user.username,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      phone: user.phone,
      police_station: user.police_station,
      // address: user.address,
      // bDay: user.bDay,
      gender: user.gender,
      password: user.password,
      role: ['mod'],
    }, httpOptions);
  }

  login(credentials): Observable<any> {
    return this.http.post(AppConfig.BASE_URL + 'auth/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  logout() {
    this.tokenStorageService.signOut();
    // window.location.reload();
    // this.isLoggedIn = false;
    // console.log('singnout 1');
    this.router.navigate(['']);
    // console.log('singnout 2');
    // console.log('logout=' + this.isLoggedIn);
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
