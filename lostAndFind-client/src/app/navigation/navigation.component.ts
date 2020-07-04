import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../services/authentication.service';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from './../components/register/register.component';
import { User } from '../models/user.model';
import { TokenStorageService } from './../services/token-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  bsmodalRef: BsModalRef;

  private roles: string[];
  // isLoggedIn = false;
  // showAdminBoard = false;
  // showModeratorBoard = false;
  user: User;
  isLoggedIn: Boolean;
  isAdmin: Boolean;
  isMod: Boolean;
  isUser: Boolean;
  username: string;
  isCollapsed = true;

  constructor(
    private bsmodalService: BsModalService,
    private tokenStorageService: TokenStorageService,
    public translateService: TranslateService,
    private authService: AuthenticationService,
    private router: Router,
  ) {
    translateService.addLangs(['English', 'සිංහල']);
    translateService.setDefaultLang('English');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/English|සිංහල/) ? browserLang : 'English');
  }

  ngOnInit() {
    this.authReset();
  }
  toggleColapse() { this.isCollapsed = !this.isCollapsed; }

  authReset() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    console.log('auth reset = ' + this.isLoggedIn);

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isMod = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    } else {
      this.user = null;
      this.isAdmin = this.isMod = this.isUser = false;
    }
  }


  onLogoutClick() {
    this.authService.logout();
    this.authReset();
  }

  openLoginModal() {
    // this.isLoginFailed = false;
    // this.isLoggedIn = true;
    this.bsmodalRef = this.bsmodalService.show(LoginComponent);

    this.bsmodalRef.content.onClose.subscribe(result => {
      this.authReset();
    });
  }

  openRegisterModal() {
    this.bsmodalRef = this.bsmodalService.show(RegisterComponent);

    this.bsmodalRef.content.onClose.subscribe(result => {
      this.authReset();
    });
  }

}
