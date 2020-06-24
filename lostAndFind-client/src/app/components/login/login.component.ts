import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user.model';
import { ValidateService } from './../../services/validate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // user = new User();
  loginForm: FormGroup;
  public onClose: Subject<boolean>;
  // submitted = false;
  // email: string;
  // password: string;

  constructor(
    private authService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    private validateService: ValidateService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    });

    this.onClose = new Subject();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  onCancel() {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }


  onLoginSubmit() {

    // required fields
    if (!this.validateService.validateLogin(this.email, this.password)) {
      // console.log('please fill in all fields');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ['please fill in all fields'],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }

    // validate email
    if (!this.validateService.validateEmail(this.email)) {
      // console.log('please use a valid email');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ['please use a valid email'],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }


    this.authService.authenticateUser({
      email: this.email.value,
      password: this.password.value,
    }).subscribe( (res) => {
      console.log(res);
      console.log(this.email);
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
        this.bsModalRef.hide();

      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Fill all Fields'],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        setTimeout(() => {
          this.router.navigate(['/register']);
        },
        3000);
        console.log('error');
      }
    });
  }

}
