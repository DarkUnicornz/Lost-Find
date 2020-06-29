import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgFlashMessageService } from 'ng-flash-messages';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { ValidateService } from 'src/app/services/validate.service';


@Component({
  selector: 'app-lostfound-item',
  templateUrl: './lostfound-item.component.html',
  styleUrls: ['./lostfound-item.component.scss']
})
export class LostfoundItemComponent implements OnInit {

  postForm: FormGroup;
  public onClose: Subject<boolean>;
  //currentDate = new Date();

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService,
    private validateService: ValidateService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      location: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
      date: ['', [
        Validators.required,
      ]],
      status: ['',[
        Validators.required,
      ]]
    });
    this.onClose = new Subject();
  }

  get location() {
    return this.postForm.get('lostfoundItem');
  }
  get description() {
    return this.postForm.get('description');
  }
  get date() {
    return this.postForm.get('date');
  }
  get status(){
    return this.postForm.get('status');
  }

  onPostSubmit() {
    const post = {
      location: this.location.value,
      description: this.description.value,
      date: this.date.value,
      status: this.status.value
    };

    // if (!this.validateService.validatePost(post)) {
    //   this.ngFlashMessageService.showFlashMessage({
    //     messages: ['please fill in all fields'],
    //     dismissible: true,
    //     timeout: 3000,
    //     type: 'danger'
    //   });
    //   return false;
    // }

  //   this.authService.sendPost(post).subscribe((res) => {
  //     if (res) {
  //       this.ngFlashMessageService.showFlashMessage({
  //         messages: ['post success'],
  //         dismissible: true,
  //         timeout: 3000,
  //         type: 'success'
  //       });
  //       setTimeout(() => {
  //         this.router.navigate(['']);
  //       }, 3000);
  //     }
  //     else {
  //       this.ngFlashMessageService.showFlashMessage({
  //         messages: ['Fill all Feilds'],
  //         dismissible: true,
  //         timeout: 3000,
  //         type: 'danger'
  //       });
  //       setTimeout(() => {
  //         this.router.navigate(['/lostfounditem']);
  //       }, 3000);
  //     }
  //   });
  }
}
