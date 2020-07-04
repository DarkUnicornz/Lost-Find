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
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(
    private bsmodalService: BsModalService,
    private tokenStorageService: TokenStorageService,
    public translateService: TranslateService,
    private router: Router,
  ) {
    translateService.addLangs(['English', 'සිංහල']);
    translateService.setDefaultLang('English');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/English|සිංහල/) ? browserLang : 'English');
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  onLogoutClick() {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigate(['/']);

  }

  openLoginModal() {
    this.bsmodalRef = this.bsmodalService.show(LoginComponent);
  }

  openRegisterModal() {
    this.bsmodalRef = this.bsmodalService.show(RegisterComponent);
  }

}
