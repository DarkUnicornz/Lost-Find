import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ComplainService } from './../../services/complain.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.scss']
})
export class ComplainComponent implements OnInit {

  complainForm: FormGroup;
  public onClose: Subject<boolean>;
  errorMessage = '';
  lost_id: any = window.sessionStorage.getItem('LOST_ID');

  constructor(
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService,
    private formBuilder: FormBuilder,
    private camplainservice: ComplainService,
  ) { }

  ngOnInit() {
    this.complainForm = this.formBuilder.group({
      police_station: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
    });
    this.onClose = new Subject();
  }


  get police_station() {
    return this.complainForm.get('police_station');
  }
  get description() {
    return this.complainForm.get('description');
  }

  onComplainSubmit() {
    const complain = {
      police_station: this.police_station.value,
      description: this.description.value,
    };

    console.log("lost id", this.lost_id);

    this.camplainservice.saveComplain(complain, this.lost_id ).subscribe(
      data => {
        console.log(complain.police_station);
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Complain successful....!'],
          dismissible: true,
          timeout: 6000,
          type: 'success'
        });
        setTimeout(() => {
          this.router.navigate(['/user_dashboard']);
        },
          6000);
      },
      err => {}
    );

    // window.sessionStorage.clear();
  }


}
