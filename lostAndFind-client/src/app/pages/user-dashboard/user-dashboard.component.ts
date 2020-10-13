import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { LostAndFound } from 'src/app/models/lost-and-found.model';
import { User } from 'src/app/models/user.model';
import { StaticsService } from 'src/app/services/statics.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { LostAndFindService } from './../../services/lost-and-find.service';

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
  found: LostAndFound[];


  constructor(
    private tokenStorageService: TokenStorageService,
    private staticService: StaticsService,
    private lostAndFindService: LostAndFindService,
  ) { }

  ngOnInit() {

    this.getAllFoundItemCount();
    this. getLostItemCount() ;
    this.getComplainCount();
    
  }

  getAllFoundItemCount() {
    this.user = this.tokenStorageService.getUser();
    this.staticService.getAllFoundCount().subscribe( res => { // must use the subscribe function to retrive the data
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

  getFoundItem() {
    this.lostAndFindService.getAllFoundPost().subscribe(
      data => {
        this.found = data['found'] as LostAndFound[];
      },
      err => {
        return ("Found item error");
      }
    )
  }


  // getDetailsCount() {
  //   this.user = this.tokenStorageService.getUser();
  //   this.staticService.getDetails().subscribe( res => { // must use the subscribe function to retrive the data
  //     this.lostCount = res;
  //     console.log("Count"+this.detailsCount);
      
  //   })
  // }

  








}
