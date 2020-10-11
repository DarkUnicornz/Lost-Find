import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { StaticsService } from 'src/app/services/statics.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-mod-dashboard',
  templateUrl: './mod-dashboard.component.html',
  styleUrls: ['./mod-dashboard.component.scss']
})
export class ModDashboardComponent implements OnInit {

  user: User;
  allLostCount: number;
  allFoundCount: number;
  policeComplainCount: number;
  detailsCount: number;

  constructor(
    private tokenStorageService: TokenStorageService,
    private staticService: StaticsService
  ) { }

  ngOnInit() {
    this.user = this.tokenStorageService.getUser();
    this.getPoliceComplainCount();
  }

  getPoliceComplainCount() {
    this.staticService.getPoliceComplainCount().subscribe( res => { // must use the subscribe function to retrive the data
      this.policeComplainCount = res;
      console.log("policeComplainCount =" + this.policeComplainCount);
    });

  }

}
