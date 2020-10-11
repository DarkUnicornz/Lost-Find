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
export class ComplainService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService,
  ) { }

  saveComplain(complain, lost_id): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.tokenStorageService.getToken() })
    };

    return this.http.post(AppConfig.BASE_URL + 'complain/complain_post/' + lost_id, {
      policestation: complain.police_station,
      description: complain.description,
    }, httpOptions);

  }

}
