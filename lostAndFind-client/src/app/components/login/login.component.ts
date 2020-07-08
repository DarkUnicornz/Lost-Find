import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user.model';
// import { ValidateService } from './../../services/validate.service';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public onClose: Subject<boolean>;

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  role: string;


  constructor(
    private authService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    public bsModalRef: BsModalRef,
    private tokenStorage: TokenStorageService,

  ) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.onClose = new Subject();
  }


  onCancel() {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }


  onLoginSubmit() {

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.onClose.next(true); // trigger refresh on navigation-component

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().roles;
        console.log('role =' + this.role);
        // this.role = this.roles;
        // this.reloadPage();
        // this.router.navigate(['']);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Logged in as' + this.role],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
        setTimeout(() => {

          console.log('role 2222 =' + this.role);

          if (this.role == 'ROLE_ADMIN') {
            console.log('IF');
            this.router.navigate(['/admin_dashboard']);
          } else if (this.role == 'ROLE_MODERATOR') {
            console.log('ELSE IF');
            this.router.navigate(['/mod_dashboard']);
          } else if (this.role == 'ROLE_USER') {
            console.log('ELSE');
            this.router.navigate(['/user_dashboard']);
          }

          // this.router.navigate(['/admin']);

          // this.isLoggedIn = true;
          // console.log('Login =' + this.isLoggedIn);
        },
          2000);
        this.bsModalRef.hide();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // reloadPage() {
  //   window.location.reload();
  // }

}
