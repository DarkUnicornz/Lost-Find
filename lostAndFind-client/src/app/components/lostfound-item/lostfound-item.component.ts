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
  foundForm: FormGroup;
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
      item: ['', [
        Validators.required,
      ]],
      location: ['', [
        Validators.required,
      ]],
      price: ['', [
        Validators.required,
      ]],
      lostDate: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
    });

    this.foundForm = this.formBuilder.group({
      founditem: ['', [
        Validators.required,
      ]],
      foundlocation: ['', [
        Validators.required,
      ]],
      foundDate: ['', [
        Validators.required,
      ]],
      founddescription: ['', [
        Validators.required,
      ]],
    });

    this.onClose = new Subject();
}

  onCancel() {
    this.onClose.next(false);
  }

  get item() {
    return this.lostForm.get('item');
  }
  get location() {
    return this.lostForm.get('location');
  }
  get price() {
    return this.lostForm.get('price');
  }
  get lostDate() {
    return this.lostForm.get('lostDate');
  }
  get description() {
    return this.lostForm.get('description');
  }




  get founditem() {
    return this.foundForm.get('founditem');
  }
  get foundlocation() {
    return this.foundForm.get('foundlocation');
  }
  get foundDate() {
    return this.foundForm.get('foundDate');
  }
  get founddescription() {
    return this.foundForm.get('founddescription');
  }


  onLostPostSubmit() {

    const lostPost = {
      item: this.item.value,
      location: this.location.value,
      price: Number(this.price.value),
      lostDate: this.lostDate.value,
      description: this.description.value,
    };

    console.log(lostPost);
    console.log("Date:" + lostPost.lostDate);

    this.lostandfindservice.saveLostPostDetails(lostPost).subscribe (
      data => {
        console.log(data.itemId);
        window.sessionStorage.setItem('LOST_ID', data.itemId);  // get current lost post id
        console.log(lostPost.location);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Create lost item successful....!'],
          dismissible: true,
          timeout: 6000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/complain']);
        },
          6000);
      },
      err => {
        this.errorMessage = err.error.message;
      },
    );
  }

  onFoundPostSubmit() {
    const foundPost = {
      founditem: this.founditem.value,
      foundlocation: this.foundlocation.value,
      foundDate: this.foundDate.value,
      founddescription: this.founddescription.value,
    };

    console.log(foundPost);

    this.lostandfindservice.savefoundPostDetails(foundPost).subscribe(
      data => {
        console.log(data.itemId);
        window.sessionStorage.setItem('LOST_ID', data.itemId);  // get current lost post id
        console.log(foundPost.foundlocation);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Create found item successful....!'],
          dismissible: true,
          timeout: 6000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/complain']);
        },
          6000);
      },
      err => {
        this.errorMessage = err.error.message;
      },
    );
  }
}
