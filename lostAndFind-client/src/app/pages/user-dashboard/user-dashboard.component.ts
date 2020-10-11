import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { StaticsService } from 'src/app/services/statics.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user: User;
  lostCount : number;
  foundCount : number;
  complainCount : number;
  detailsCount :  number;


  constructor(
    private tokenStorageService: TokenStorageService,
    private staticService: StaticsService
  ) { }

  ngOnInit() {

    this.getFoundItemCount();
    this. getLostItemCount() ;
    this.getComplainCount();
    
  }

  getFoundItemCount() {
    this.user = this.tokenStorageService.getUser();
    this.staticService.getFoundCount().subscribe( res => { // must use the subscribe function to retrive the data
      this.foundCount = res;
      console.log("Count"+this.foundCount);
      
    })
  }

  getLostItemCount() {
    this.user = this.tokenStorageService.getUser();
    this.staticService.getLostCount().subscribe( res => { // must use the subscribe function to retrive the data
      this.lostCount = res;
      console.log("Count"+this.lostCount);
      
    })
  }


  getComplainCount() {
    this.user = this.tokenStorageService.getUser();
    this.staticService.getComplainCount().subscribe( res => { // must use the subscribe function to retrive the data
      this.complainCount = res;
      console.log("Count"+this.complainCount);
      
    })
  }


  // getDetailsCount() {
  //   this.user = this.tokenStorageService.getUser();
  //   this.staticService.getDetails().subscribe( res => { // must use the subscribe function to retrive the data
  //     this.lostCount = res;
  //     console.log("Count"+this.detailsCount);
      
  //   })
  // }

  








}
