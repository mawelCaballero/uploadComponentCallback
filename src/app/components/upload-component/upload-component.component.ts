import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.scss']
})
export class UploadComponentComponent implements OnInit {

  @Input()
  public uploadCallback: Function; 

  files: Array<any>;

  constructor() { 
    this.files = new Array<any>();
  }

  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      for (let x = 0; x < event.target.files.length; x++) {
        this.files.push(event.target.files[x]);
      }
    }
  }

  onSubmit() {
    const aerf= this.uploadCallback(this.files);
    console.log(aerf);
  }

}
