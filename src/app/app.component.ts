import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { YoutubeService } from '../app/_services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YoutubeService]
})
export class AppComponent {
  channelData:any;
  
  //create form instance
  youtubeForm = new FormGroup({
    channelString: new FormControl('',Validators.required)
  })

  
  constructor(private youtubeService:YoutubeService, fb:FormBuilder){

  }
  
  showChannelData(){
    let data = this.youtubeForm.get('channelString').value;
    this.youtubeService.fetchData().subscribe(response => {
      this.channelData = response.json();
      console.log(this.channelData);
    })
  }

}
