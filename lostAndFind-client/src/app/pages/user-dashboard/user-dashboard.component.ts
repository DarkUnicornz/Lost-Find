import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user: User;

  constructor(
    private tokenStorageService: TokenStorageService,
  ) { }

  ngOnInit() {
    this.user = this.tokenStorageService.getUser();
  }

}
