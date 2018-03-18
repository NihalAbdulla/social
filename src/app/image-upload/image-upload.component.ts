import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:8080/api/upload';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})

export class ImageUploadComponent implements OnInit {

  userId: String ="5a9d5d69889bfe19c8017df4";

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo',authToken: localStorage.getItem("id_token")});
  

  constructor() { }

  ngOnInit() {

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('userId', this.userId);
     };

     //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
     this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false };
     //overide the onCompleteItem property of the uploader so we are 
     //able to deal with the server response.
     this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          console.log("ImageUpload:uploaded:", item, status, response);
      };
  }

}
