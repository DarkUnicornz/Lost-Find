import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgFlashMessageService } from 'ng-flash-messages';
import { LostAndFindService } from './../../services/lost-and-find.service';


@Component({
  selector: 'app-lostfound-item',
  templateUrl: './lostfound-item.component.html',
  styleUrls: ['./lostfound-item.component.scss']
})
export class LostfoundItemComponent implements OnInit {

  lostForm: FormGroup;
  public onClose: Subject<boolean>;
  errorMessage = '';

  constructor(
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService,
    private formBuilder: FormBuilder,
    private lostandfindservice: LostAndFindService,
  ) { }

  ngOnInit() {
    this.lostForm = this.formBuilder.group({
      location: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
    });
    this.onClose = new Subject();
}

  onCancel() {
    this.onClose.next(false);
  }

  get location() {
    return this.lostForm.get('location');
  }
  get description() {
    return this.lostForm.get('description');
  }


  onLostPostSubmit() {

    const lostPost = {
      location: this.location.value,
      description: this.description.value,
    };

    this.lostandfindservice.saveLostPostDetails(lostPost).subscribe (
      data => {
        console.log(lostPost.location);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Create lost item successful....!'],
          dismissible: true,
          timeout: 6000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/user_dashboard']);
        },
          6000);
      },
      err => {
        this.errorMessage = err.error.message;
      },
    );
  }
}
