import { Component, OnInit } from '@angular/core';

import { User } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    // this.authService.registerUser
  }

}
