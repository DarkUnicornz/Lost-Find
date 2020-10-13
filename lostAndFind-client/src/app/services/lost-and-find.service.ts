import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppConfig } from './../config/app-config';
import { User } from './../models/user.model';
import { Post } from './../models/post.model';
import { TokenStorageService } from './../services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class LostAndFindService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService,
   
  ) { }

  saveLostPostDetails(lostPost): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.post(AppConfig.BASE_URL + 'lost&founditem/lost_post', {
      item: lostPost.item,
      location: lostPost.location,
      price: lostPost.price,
      lost_found_date: lostPost.lostDate,
      description: lostPost.description,
    }, httpOptions);

  }

  savefoundPostDetails(foundPost): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.post(AppConfig.BASE_URL + 'lost&founditem/found_post', {
      item: foundPost.founditem,
      location: foundPost.foundlocation,
      lost_found_date: foundPost.foundlostDate,
      description: foundPost.founddescription,
    }, httpOptions);

  }

  getAllFoundPost(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.get(AppConfig.BASE_URL + 'lost&founditem/user_found_posts', httpOptions);
  }
}
