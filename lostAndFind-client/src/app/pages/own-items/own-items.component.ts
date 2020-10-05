import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-own-items',
  templateUrl: './own-items.component.html',
  styleUrls: ['./own-items.component.scss']
})
export class OwnItemsComponent implements OnInit {

  itemForm: FormGroup;
  public onClose: Subject<boolean>;
  previewUrls: any[] = [];
  fileData: File = null;

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserService,
  ) { }

  fileChangeEvent(fileInput: any){
    this.fileData = fileInput.target.files[0];
    this.preview();
  }

  preview(){
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      console.log(reader.result);
      this.previewUrls.push(reader.result);
    };
  }

  removeImage(index){
    console.log(index);
    const images = this.previewUrls ? [...this.previewUrls] : []

    if (index > -1 && index < images.length) {
      images.splice(index, 1);
    }
    this.previewUrls = images;
  }

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      item_name: ['', [
        Validators.required,
      ]],
      item_details: ['', [
        Validators.required,
      ]],
    });

    this.onClose = new Subject();
  }

  get item_name() {
    return this.itemForm.get('item_name');
  }
  get item_details() {
    return this.itemForm.get('item_details');
  }

  onItemSubmit() {
    const item = {
      item_name: this.item_name.value,
      item_details: this.item_details.value,
      item_image: this.previewUrls
    };
    console.log('Items is' + item.item_name);

    this.userServices.sendOwnItemDetails(item).subscribe(
      data => {
        console.log(data);
        console.log(item.item_name);
      },
      err => {
        console.log('Error');
      },
    );

  }
}
