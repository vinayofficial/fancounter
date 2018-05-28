import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  localData:any;
  storageKey:any;

  constructor() { }
  // removeItem(){
  //   localStorage.removeItem(cur);
  // }
  ngOnInit() {
    // this.storageKey = 
    // this.localData = localStorage.getItem(this.storageKey);
    // console.log(this.localData)
  }

}
