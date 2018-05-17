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
  test:any;
  
  //create form instance
  youtubeForm = new FormGroup({
    channelString: new FormControl('',Validators.required)
  })
  constructor(private youtubeService:YoutubeService) { }

  //show data 
  showChannelData(){
    this.youtubeService.fetchData().subscribe(response => {
      this.channelData = response.json();
      console.log(this.channelData.items);
    })
  }
  ngOnInit() {
  }

}
