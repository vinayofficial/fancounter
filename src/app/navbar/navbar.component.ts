import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { YoutubeService } from '../_services/youtube.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  providers: [YoutubeService]
})
export class NavbarComponent implements OnInit {
  public result:Array<any>;
  localData:any;
  storageKey:any;
  loginUser:any;
  removeUser:any;
  checkLogin:boolean=false;
  
  test:any="test";
  constructor(private youtubeService:YoutubeService) { }
  removekey(){
    this.removeUser=localStorage.removeItem("currentUser")
    this.checkLogin=!this.checkLogin
  }
  ngOnInit() {
    if(localStorage.getItem("currentUser")){
        this.loginUser = localStorage.getItem("currentUser");
        this.checkLogin=true;
        console.log(this.loginUser+" condition true");
    }
    else {
        console.log("condition false");
    }
  }

  searchForm = new FormGroup({
    inputKeys: new FormControl()
  })

  searchData(){
    let data = this.searchForm.get('inputKeys').value;
    this.youtubeService.fetchData(data).subscribe(response => {
      console.log(response.json())
    })
  }
}
