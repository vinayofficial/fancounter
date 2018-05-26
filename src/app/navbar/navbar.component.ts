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
<<<<<<< HEAD
  public result:Array<any>;
  
  test:any="test";
  constructor(private youtubeService:YoutubeService) { }

=======
  loginUser:any;
  removeUser:any;
  checkLogin:boolean=false;

  constructor() { }
  
  removekey(){
    this.removeUser=localStorage.removeItem("currentUser")
    this.checkLogin=!this.checkLogin
  }
>>>>>>> 361d8e9ea0b65ffc1aee6fca57020f1198f48f74
  ngOnInit() {
   this.loginUser = localStorage.getItem("currentUser");
   if(this.loginUser.length > 0){
     this.checkLogin=true;
     console.log("condition true");
   }
   else{
     console.log("condition false");
   }
  // console.log(this.loginUser.length)


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
