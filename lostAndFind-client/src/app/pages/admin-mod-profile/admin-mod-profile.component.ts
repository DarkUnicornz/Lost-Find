import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AdminMod } from 'src/app/models/admin-mod.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-mod-profile',
  templateUrl: './admin-mod-profile.component.html',
  styleUrls: ['./admin-mod-profile.component.scss']
})
export class AdminModProfileComponent implements OnInit {

  editForm: FormGroup;
  Securityform: FormGroup;
  personDetails: AdminMod = <AdminMod>{};

  // fileData: File = null;
  // previewUrls;
  // fileUploadProgress: string = null;
  // uploadedFilePath: string = null;

  constructor(
    fb: FormBuilder,
    private AdminModService: UserService,
    private tokenService: TokenStorageService,
  ) {
    this.editForm = fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^((\\+94-?)|0)?[0-9]{10}$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      location: ['', [Validators.required]],
    });
  }

  // fileChangeEvent(fileInput: any) {
  //   this.fileData = fileInput.target.files[0];
  //   this.preview();
  // }

  // preview() {
  //   // Show preview
  //   var mimeType = this.fileData.type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     return;
  //   }

  //   var reader = new FileReader();
  //   reader.readAsDataURL(this.fileData);
  //   reader.onload = (_event) => {
  //     console.log(reader.result)
  //     this.previewUrls = reader.result;
  //   };
  // }

  async ngOnInit() {
    this.personDetails = this.tokenService.getUser();

    this.editForm.patchValue({
      first_name: this.personDetails.first_name,
      last_name: this.personDetails.last_name,
      phone: this.personDetails.phone,
      email: this.personDetails.email,
      location: this.personDetails.location
    });
  }

  get first_name(){
    return this.editForm.get('first_name');
  }

  get last_name(){
    return this.editForm.get('last_name');
  }

  get phone(){
    return this.editForm.get('phone');
  }

  get email(){
    return this.editForm.get('email');
  }

  get location(){
    return this.editForm.get('location');
  }

  onSubmit(){
    const editForm = {
      first_name: this.first_name.value,
      last_name: this.last_name.value,
      phone: this.phone.value,
      email: this.email.value,
      location: this.location.value
    }

    console.log(this.first_name)

    this.AdminModService.editProfile(editForm).subscribe({next:(res)=>{
      console.log(res)
    },
    error: (err) => {
      console.log(err);
    }
  })
  };  

}
