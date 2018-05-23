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

  videoResults:any;
  requestStatus:number;
  msg='';
  //create form instance
  youtubeForm = new FormGroup({
    channelString: new FormControl('',Validators.required)
  })
  constructor(private youtubeService:YoutubeService) { }

  //show data 
  showvideoResults(){
    let KEYWORD = this.youtubeForm.get("channelString").value;
    this.youtubeService.fetchData(KEYWORD).subscribe((response) => {
      this.videoResults = response.json();
      this.videoResults = this.videoResults.items
      console.log(this.videoResults);
    },(error) => {
      console.log(error.status)
      this.requestStatus = error.status;
      if(this.requestStatus === 0){
        this.msg = "Your Internet is Not Working.";
      }
    }, () => {
        this.msg = "Here is your search result:";
    })
  }

  ngOnInit() {
    let KEYWORD = this.youtubeForm.get("channelString").value;
    this.youtubeService.fetchData(KEYWORD).subscribe((response) => {
      this.videoResults = response.json();
      this.videoResults = this.videoResults.items
      console.log(this.videoResults);
    },(error) => {
      console.log(error.status)
      this.requestStatus = error.status;
      if(this.requestStatus === 0){
        this.msg = "Your Internet is Not Working.";
      }
    }, () => {
        this.msg = "Here is your search result:";
    })
  }

}
