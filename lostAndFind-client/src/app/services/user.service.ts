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
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) { }

  // sendOwnItemDetails(): Observable<any> {
  //   return this.http.post(AppConfig.BASE_URL + 'ownitemdetails', {
  //     nic: user.nic,
  //   }, httpOptions);
  // }

}
