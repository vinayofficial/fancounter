import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {YoutubeService} from '../_services/youtube.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: [],
  providers: [YoutubeService]
})
export class VideoComponent implements OnInit {
  videoid:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( param => {
      console.log(param);
      this.videoid = param.get('videoid');
    })
  }

}
