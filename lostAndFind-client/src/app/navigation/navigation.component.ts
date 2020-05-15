import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthenticationService } from './../services/authentication.service';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from './../components/register/register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  bsmodalRef: BsModalRef;

  loggedIn: boolean;
  isAdmin: boolean;
  isMod: boolean;
  isUser: boolean;

  constructor(
    private bsmodalService: BsModalService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  openLoginModal() {
    this.bsmodalRef = this.bsmodalService.show(LoginComponent);
  }

  openRegisterModal() {
    this.bsmodalRef = this.bsmodalService.show(RegisterComponent);
  }

}
