import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThemeService } from 'ng2-charts';
import { UserDetail } from 'src/app/models/user.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.component.html',
  styleUrls: ['./edituserprofile.component.scss']
})
export class EdituserprofileComponent implements OnInit {

  editForm : FormGroup;
  userDetail : UserDetail = <UserDetail>{};



  constructor(private userService : UserService , fb : FormBuilder , private tokenService : TokenStorageService) { 
    this.editForm = fb.group(
      {
        username:['',[Validators.required]],
        fname: ['', [Validators.required]], // '' mean the default value is the ''
        lname: ['', [Validators.required]],
        tnumber: ['',[Validators.required]],
        address: ['',[Validators.required]],
        email:['',[Validators.required]]
        
      }
    )
   }

  ngOnInit() {
    this.userDetail = this.tokenService.getUser();
    console.log(this.userDetail)

    this.editForm.patchValue({
      username :this.userDetail.username,
      fname : this.userDetail.fName,
      lname : this.userDetail.lName,
      tnumber:this.userDetail.phone,
      address:this.userDetail.address,
      email:this.userDetail.email

    });

  }

  onSubmit(){
    const editData = {
      username : this.username.value,
      fname : this.fname.value,
      lname : this.lname.value,
      email : this.email.value,
      phone :this.tnumber.value,
      address :this.address.value,
      bDay : this.userDetail.bDay,
      gender :this.userDetail.gender,
      nic : this.userDetail.nic,
      role : this.userDetail.roles,
      password : "test password"

    }
    console.log(editData)
    this.userService.editProfile1(editData).subscribe({next: (res) => {
      console.log(res)
    },
  error : (err) => {
    console.log(err); 
  }})
  }

  //geters
  get fname() {
    return this.editForm.get('fname');
  }
  get lname() {
    return this.editForm.get('lname');
  }get tnumber() {
    return this.editForm.get('tnumber');
  }get address() {
    return this.editForm.get('address');
  }get email() {
    return this.editForm.get('email');
  }
  get username(){
    return this.editForm.get('username')
  }


}
