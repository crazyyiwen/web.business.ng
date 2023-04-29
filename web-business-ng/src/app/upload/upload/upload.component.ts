import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploadModel = new FormGroup({
    imageName: new FormControl(),
    imageType: new FormControl(),
    imageSubType: new FormControl(),
    image: new FormControl()
  });

  fileName: any;

  file:any;
  // @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
  //   const file = event && event.item(0);
  //   this.file = file;
  // }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;
  }

  submit(){
    debugger
    const formData = new FormData();
    formData.append("thumbnail", this.file);
    formData.append("imageName", this.uploadModel.value.imageName);
    formData.append("imageType", this.uploadModel.value.imageType);
    formData.append("imageSubType", this.uploadModel.value.imageSubType);
    this.http.post(environment.baseUrl + 'api/Action/upload', formData, {reportProgress: true, observe: 'events'}).subscribe(
            res => {
              debugger
            }
    );
  }
}
