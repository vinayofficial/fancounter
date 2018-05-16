import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  youtubeForm = new FormGroup({
    channelString: new FormControl('',Validators.required)
  })
  
  showChannelData(){
    let data = this.youtubeForm.get('channelString').value;
    console.log(data);
  }

  constructor(){

  }
}
