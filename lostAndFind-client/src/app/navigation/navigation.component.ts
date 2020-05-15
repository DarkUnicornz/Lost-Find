import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthenticationService } from './../services/authentication.service';
import { LoginComponent } from './../components/login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  modalRef: BsModalRef;

  loggedIn: boolean;
  isAdmin: boolean;
  isMod: boolean;
  isUser: boolean;

  constructor(
    private modalService: BsModalService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

}
