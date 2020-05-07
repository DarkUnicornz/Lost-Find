import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new User();

  username: string;
  password: string;

  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    console.log('Login button');
    this.authService.authenticateUser ({
      username: this.username,
      password: this.password,
    }).subscribe((res) => {
      console.log('fgsgdhs');
      if (res['success']) {
        console.log('response res');
      } else {
        console.log('Error in hear');
      }
      console.log('Wrong syntax');
    });
  }

}
