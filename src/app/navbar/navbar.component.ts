import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  loginUser:any;
  removeUser:any;
  checkLogin:boolean=false;

  constructor() { }
  
  removekey(){
    this.removeUser=localStorage.removeItem("currentUser")
    this.checkLogin=!this.checkLogin
  }
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

}
