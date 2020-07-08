import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

// import { User } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { ValidateService } from './../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public onClose: Subject<boolean>;
  registerForm: FormGroup;
  currentDate = new Date();
  mobNumberPattern = '^((\\+94-?)|0)?[7,9]{1}[1,6,7]{1}[0-9]{7}$';       // "^((\\+91-?)|0)?[0-9]{10}$";
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
    private validateService: ValidateService,
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
  ) { }


  // form = new FormGroup({
  //   bDay: new FormControl(new Date()),
  //   dateRange: new FormControl([
  //     new Date(),
  //     new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
  //   ])
  // });



  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nic: ['', [
        Validators.required,
      ]],
      username: ['', [
        Validators.required,
      ]],
      fName: ['', [
        Validators.required,
      ]],
      lName: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.email,
        Validators.required,
      ]],
      phone: ['', [
        Validators.required,
      ]],
      address: ['', [
        Validators.required,
      ]],
      bDay: ['', [
        Validators.required,
      ]],
      gender: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    });

    this.onClose = new Subject();
  }


  get nic() {
    return this.registerForm.get('nic');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get fName() {
    return this.registerForm.get('fName');
  }
  get lName() {
    return this.registerForm.get('lName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get address() {
    return this.registerForm.get('address');
  }
  get bDay() {
    return this.registerForm.get('bDay');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onCancel() {
    // this.onClose.next(false);
    this.bsModalRef.hide();
  }

  onRegisterSubmit() {
    const user = {
      nic: this.nic.value,
      username: this.username.value,
      fName: this.fName.value,
      lName: this.lName.value,
      email: this.email.value,
      phone: this.phone.value,
      address: this.address.value,
      bDay: this.bDay.value,
      gender: this.gender.value,
      password: this.password.value,

    };

    console.log(this.email.value);
    console.log('222222');

    // // required fields
    // if (!this.validateService.validateRegister(user)) {
    //   // console.log('please fill in all fields');
    //   this.ngFlashMessageService.showFlashMessage({
    //     // Array of messages each will be displayed in new line
    //     messages: ['please fill in all fields'],
    //     // Whether the flash can be dismissed by the user defaults to false
    //     dismissible: true,
    //     // Time after which the flash disappears defaults to 2000ms
    //     timeout: 3000,
    //     // Type of flash message, it defaults to info and success, warning, danger types can also be used
    //     type: 'danger'
    //   });
    //   return false;
    // }

    // // validate email
    // if (!this.validateService.validateEmail(user.email)) {
    //   // console.log('please use a valid email');
    //   this.ngFlashMessageService.showFlashMessage({
    //     // Array of messages each will be displayed in new line
    //     messages: ['please use a valid email'],
    //     // Whether the flash can be dismissed by the user defaults to false
    //     dismissible: true,
    //     // Time after which the flash disappears defaults to 2000ms
    //     timeout: 3000,
    //     // Type of flash message, it defaults to info and success, warning, danger types can also be used
    //     type: 'danger'
    //   });
    //   return false;
    // }

    // register user
    // this.authService.registerUser(user).subscribe((res) => {
    //   console.log('11111');
    //   if (res) {
    //     this.ngFlashMessageService.showFlashMessage({
    //       messages: ['You are now registered'],
    //       dismissible: true,
    //       timeout: 3000,
    //       type: 'success'
    //     });
    //     setTimeout(() => {
    //       this.router.navigate(['/']);
    //     },
    //       3000);
    //     this.bsModalRef.hide();

    //   } else {
    //     this.ngFlashMessageService.showFlashMessage({
    //       messages: ['Registration failed'],
    //       dismissible: true,
    //       timeout: 3000,
    //       type: 'danger'
    //     });
    //     setTimeout(() => {
    //       this.router.navigate(['/register']);
    //     },
    //       3000);
    //   }
    // });

    this.authService.register(user).subscribe(
      data => {
        console.log(data);
        console.log(user.fName);
        this.isSuccessful = true;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Your registration is successful!'],
          dismissible: true,
          timeout: 6000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        },
          6000);
        this.bsModalRef.hide();

        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(user.fName);
        // this.isSignUpFailed = true;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Signup failed!' + this.errorMessage],
          dismissible: true,
          timeout: 3000,
          type: 'warning'
        });
        setTimeout(() => {
          this.router.navigate(['/register']);
        },
          3000);

        this.isSignUpFailed = true;

      }
    );


  }

}
