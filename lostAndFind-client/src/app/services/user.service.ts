import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppConfig } from './../config/app-config';
import { User } from './../models/user.model';
import { Post } from './../models/post.model';
import { TokenStorageService } from './../services/token-storage.service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // private httpOptions,
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) {
    // httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': tokenStorageService.getToken() })
    // };
   }

  sendOwnItemDetails(item): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    console.log('Token = ' + this.tokenStorageService.getToken());

    return this.http.post(AppConfig.BASE_URL + 'user/ownitemdetails', {
      item_name: item.item_name,
      item_details: item.item_details,
    }, httpOptions);
  }

  editProfile(data) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };
    return this.http.put(AppConfig.BASE_URL + 'app/profile/editprofile', {
      username : data.username,
      fname : data.fname,
      lname : data.lname,
      email : data.email,
      phone : data.phone,
      address : data.address,
    }, httpOptions);
  }

  editProfile1(data){
    return this.http.put('http://localhost:8082/app/profile/editprofile' , data);
  }

}
