import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { YoutubeService } from '../app/_services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YoutubeService]
})
export class AppComponent {
  channelData:any;
  youtubeForm = new FormGroup({
    channelString: new FormControl('',Validators.required)
  })
  
  showChannelData(){
    let data = this.youtubeForm.get('channelString').value;
    this.youtubeService.fetchData().subscribe(response => {
      this.channelData = response.json(); 
    })
  }

  constructor(private youtubeService:YoutubeService){

  }
}
