import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { StaticsService } from 'src/app/services/statics.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  allFoundCount: number;
  user: User;

  constructor(
    private tokenStorageService: TokenStorageService,
    private staticService: StaticsService
  ) { }

  ngOnInit() {
    this.user = this.tokenStorageService.getUser();
    this.getAllFoundCount();
  }

  getAllFoundCount() {
    this.staticService.getAllFoundCount().subscribe(res => { // must use the subscribe function to retrive the data
      this.allFoundCount = res;
      console.log("allFoundCount =" + this.allFoundCount);
    });
  }

}

