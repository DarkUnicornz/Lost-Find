import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
  //personDetails: FormGroup;

  fileData: File = null;
  previewUrls;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private tokenService: TokenStorageService,
    private authService: AuthenticationService
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

  fileChangeEvent(fileInput: any) {
    this.fileData = fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      console.log(reader.result)
      this.previewUrls = reader.result;
    };
  }

  async ngOnInit() {
    //this.pers = this.tokenService.getUser();
  }

}
