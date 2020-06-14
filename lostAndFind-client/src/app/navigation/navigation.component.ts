import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TranslateService} from '@ngx-translate/core';

import { AuthenticationService } from './../services/authentication.service';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from './../components/register/register.component';
import { User } from '../models/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  bsmodalRef: BsModalRef;

  user: User;
  loggedIn: boolean;
  isAdmin: boolean;
  isMod: boolean;
  isUser: boolean;

  constructor(
    private bsmodalService: BsModalService,
    private authService: AuthenticationService,
    public translateService: TranslateService,
  ) {
    translateService.addLangs(['English', 'සිංහල']);
    translateService.setDefaultLang('English');
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/English|සිංහල/) ? browserLang : 'English');
  }

  ngOnInit() {
    // this.authReset();
  }

  // authReset() {
  //   this.loggedIn = this.authService.loggedIn();
  //   if (this.loggedIn) {
  //     this.user = this.authService.getUser();
  //     this.isAdmin = this.user.role == 'admin';
  //     this.isMod = this.user.role == 'mod';
  //     this.isUser = this.user.role == 'user';
  //   }
  //   else {
  //     this.user = null;
  //     this.isAdmin = this.isMod = this.isUser = false;
  //   }
  // }

  openLoginModal() {
    this.bsmodalRef = this.bsmodalService.show(LoginComponent);
  }

  openRegisterModal() {
    this.bsmodalRef = this.bsmodalService.show(RegisterComponent);
  }

}
