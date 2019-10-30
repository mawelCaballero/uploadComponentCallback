import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upload';

  public theUploadCallback: Function;

  public ngOnInit(){
    this.theUploadCallback = this.theCallback.bind(this);
  }

  public theCallback(files:any[]){
    files.forEach(element => {
      console.log('uploading file ' + element.name);  
    });
    return "toma valor";
  
    
  }

}
