import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from './../config/app-config';
import { TokenStorageService } from './token-storage.service';

const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AdminModService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) { }

  editProfile(data){

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.put(AppConfig.BASE_URL + 'profile/editprofile', {
      fname : data.first_name,
      lname : data.last_name,
      email : data.email,
      phone : data.phone,
      location : data.location,
    },httpOptions);
  }

}
