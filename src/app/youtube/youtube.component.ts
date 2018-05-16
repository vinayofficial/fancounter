import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styles: []
})
export class YoutubeComponent implements OnInit {


  constructor(fb: FormBuilder) { }

  ngOnInit() {
  }

}
