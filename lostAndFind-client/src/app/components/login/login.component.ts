import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // user = new User();

  email: string;
  password: string;

  constructor(
    private authService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.authService.authenticateUser({
      email: this.email,
      password: this.password,
    }).subscribe( (res) => {
      // console.log(res);
      if (res) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Login success'],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['']);
        },
        3000);

      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['xxxxxx'],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        setTimeout(() => {
          this.router.navigate(['/register']);
        },
        3000);
      }
    });
  }

}
