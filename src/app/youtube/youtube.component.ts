import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {YoutubeService} from '../_services/youtube.service'
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styles: [],
  providers:[YoutubeService]

})
export class YoutubeComponent implements OnInit {

  channelData:any;
  
  //create form instance
  youtubeForm = new FormGroup({
    channelString: new FormControl('',Validators.required)
  })
  constructor(private youtubeService:YoutubeService) { }

  //show data 
  showChannelData(){
    let data = this.youtubeForm.get('channelString').value;
    console.log(data);
  }
  ngOnInit() {
  }

}
