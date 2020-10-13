import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { AppConfig } from './../config/app-config';


@Injectable({
  providedIn: 'root'
})
export class StaticsService {
  constructor(
    private tokenStorageService: TokenStorageService,
    private http : HttpClient,
  ){
    
   }





   getAllFoundCount(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.get(AppConfig.BASE_URL + 'lost&founditem/all_found_count',{});
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    // };

    // console.log('Token = ' + this.tokenStorageService.getToken());

    // return this.http.post(AppConfig.BASE_URL + 'user/foundcount', { // check the url
     
    // }, httpOptions);
  }

  getLostCount(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.get(AppConfig.BASE_URL + 'lost&founditem/user_lost_count',{});

  }


  getComplainCount(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.get(AppConfig.BASE_URL + 'complain/user_complain_count',{}); // rewrite this

  }


  getDetailsCount(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.get(AppConfig.BASE_URL + 'lost&founditem/user_lost_count',{}); // rewrite this

}

  getPoliceComplainCount(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.get(AppConfig.BASE_URL + 'complain/location_count', {});
  }

}
