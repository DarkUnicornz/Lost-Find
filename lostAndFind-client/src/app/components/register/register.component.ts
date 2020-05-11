import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

import { User } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  id: string;
  username: string;
  email: string;
  password: string;
  alert: { type: string; msg: any; };
  success: boolean;

  constructor(
    private authService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      id: this.id,
      username: this.username,
      email: this.email,
      password: this.password,
    };

    // register user
    this.authService.registerUser(user).subscribe( (res) => {
      if (res) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['You are now registered'],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/login']);
        },
        3000);

      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Registration failed'],
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
