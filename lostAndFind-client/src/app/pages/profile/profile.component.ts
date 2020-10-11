import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetail } from 'src/app/models/user.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  editForm : FormGroup;
  userDetail : UserDetail = <UserDetail>{};

  constructor(fb: FormBuilder , private userService : UserService ,private tokenService : TokenStorageService) { 
    this.editForm = fb.group(
      {
        first_name: ['', [Validators.required]], // '' mean the default value is the ''
        last_name: ['', [Validators.required]],
        phone: ['',[Validators.required]],
        email: ['',[Validators.required]],
        password:['',[Validators.required]],
        password2:['',[Validators.required]],
        password3:['',[Validators.required]],
        address:['',[Validators.required]]

      }
    )
  }

  ngOnInit() {
    this.userDetail = this.tokenService.getUser();
    console.log(this.userDetail)

    this.editForm.patchValue({
      first_name : this.userDetail.fName,
      last_name : this.userDetail.lName,
      phone:this.userDetail.phone,
      email:this.userDetail.email,
      address:this.userDetail.address

    });
  }

  
  get first_name() {
    return this.editForm.get('first_name');
  }
  
  get last_name() {
    return this.editForm.get('last_name');
  }

  get phone() {
    return this.editForm.get('phone');
  }

  get email() {
    return this.editForm.get('email');
  }

  get address() {
    return this.editForm.get('address');
  }



  // the onSubmit method

  onSubmit(){
    const editData = {
      fname : this.first_name.value,
      lname : this.last_name.value,
      email : this.email.value,
      phone :this.phone.value,
      address :this.address.value

    }
    this.userService.editProfile(editData).subscribe({next: (res) => {
      console.log(res)
    },
  error : (err) => {
    console.log(err); 
  }})
  }

}
