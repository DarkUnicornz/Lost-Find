import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

import { AuthenticationService } from './../../services/authentication.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-admin-new',
  templateUrl: './admin-new.component.html',
  styleUrls: ['./admin-new.component.scss']
})
export class AdminNewComponent implements OnInit {

  public onClose: Subject<boolean>;
  currentDate = new Date();
  mobNumberPattern = '^((\\+94-?)|0)?[7,9]{1}[0,1,6,7]{1}[0-9]{7}$';       // "^((\\+91-?)|0)?[0-9]{10}$";
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  // role: string[];
  admin = "admin";

  adminRegisterForm: FormGroup;
  modRegisterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.adminRegisterForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
      ]],
      fName: ['', [
        Validators.required,
      ]],
      lName: ['', [
        Validators.required,
      ]],
      gender: ['', [
        Validators.required,
      ]],
      nic: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.email,
        Validators.required,
      ]],
      phone: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    });


    this.modRegisterForm = this.formBuilder.group({
      modusername: ['', [
        Validators.required,
      ]],
      modfName: ['', [
        Validators.required,
      ]],
      modlName: ['', [
        Validators.required,
      ]],
      modgender: ['', [
        Validators.required,
      ]],
      modnic: ['', [
        Validators.required,
      ]],
      modemail: ['', [
        Validators.email,
        Validators.required,
      ]],
      modphone: ['', [
        Validators.required,
      ]],
      police_station: ['', [
        Validators.required,
      ]],
      modpassword: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
    });

    this.onClose = new Subject();

  }


  get username() {
    return this.adminRegisterForm.get('username');
  }
  get fName() {
    return this.adminRegisterForm.get('fName');
  }
  get lName() {
    return this.adminRegisterForm.get('lName');
  }
  get gender() {
    return this.adminRegisterForm.get('gender');
  }
  get nic() {
    return this.adminRegisterForm.get('nic');
  }
  get email() {
    return this.adminRegisterForm.get('email');
  }
  get phone() {
    return this.adminRegisterForm.get('phone');
  }
  get password() {
    return this.adminRegisterForm.get('password');
  }



  get modusername() {
    return this.modRegisterForm.get('modusername');
  }
  get modfName() {
    return this.modRegisterForm.get('modfName');
  }
  get modlName() {
    return this.modRegisterForm.get('modlName');
  }
  get modgender() {
    return this.modRegisterForm.get('modgender');
  }
  get modnic() {
    return this.modRegisterForm.get('modnic');
  }
  get modemail() {
    return this.modRegisterForm.get('modemail');
  }
  get modphone() {
    return this.modRegisterForm.get('modphone');
  }
  get police_station() {
    return this.modRegisterForm.get('police_station');
  }
  get modpassword() {
    return this.modRegisterForm.get('modpassword');
  }


  onAdminRegisterSubmit() {
    const admin = {
      nic: this.nic.value,
      username: this.username.value,
      fName: this.fName.value,
      lName: this.lName.value,
      email: this.email.value,
      phone: this.phone.value,
      gender: this.gender.value,
      password: this.password.value,
    };

    console.log("admin:" + admin);

    this.authService.adminRegister(admin).subscribe(
      data => {
        console.log('data object =' + data);
        console.log(admin.fName);
        this.isSuccessful = true;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['New admin registration is successful!'],
          dismissible: true,
          timeout: 6000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/new_admin']);
        },
          6000);
        // this.bsModalRef.hide();

        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(admin.fName);
        // this.isSignUpFailed = true;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Signup failed!' + this.errorMessage],
          dismissible: true,
          timeout: 3000,
          type: 'warning'
        });
        setTimeout(() => {
          this.router.navigate(['/new_admin']);
        },
          3000);

        this.isSignUpFailed = true;

      }
    );
  }


  onModRegisterSubmit() {
    const mod = {
      nic: this.modnic.value,
      username: this.modusername.value,
      fName: this.modfName.value,
      lName: this.modlName.value,
      email: this.modemail.value,
      phone: this.modphone.value,
      police_station: this.police_station.value,
      gender: this.modgender.value,
      password: this.modpassword.value,
    };

    this.authService.modRegister(mod).subscribe(
      data => {
        console.log(data);
        console.log(mod.fName);
        this.isSuccessful = true;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['New mod registration is successful!'],
          dismissible: true,
          timeout: 6000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/new_admin']);
        },
          6000);
        // this.bsModalRef.hide();

        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(mod.fName);
        // this.isSignUpFailed = true;
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Signup failed!' + this.errorMessage],
          dismissible: true,
          timeout: 3000,
          type: 'warning'
        });
        setTimeout(() => {
          this.router.navigate(['/new_admin']);
        },
          3000);

        this.isSignUpFailed = true;

      }
    );

  }

}
