import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

// import { User } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { ValidateService } from './../../services/validate.service';

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
    private validateService: ValidateService,
    public bsModalRef: BsModalRef
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

    // required fields
    if (!this.validateService.validateRegister(user)) {
      // console.log('please fill in all filds');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ['please fill in all filds'],
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
    if (!this.validateService.validateEmail(user.email)) {
      // console.log('please use a valied email');
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ['please use a valied email'],
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true,
        // Time after which the flash disappears defaults to 2000ms
        timeout: 3000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'danger'
      });
      return false;
    }

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

        this.bsModalRef.hide();

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
