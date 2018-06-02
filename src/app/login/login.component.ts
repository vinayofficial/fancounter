import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  storageKey ="";
  localData:any;
  msg="";
  signIn = new FormGroup({
    userEmail : new FormControl('', Validators.required),
    userPassword : new FormControl('', Validators.required)
  });
  
  loginData(){
       let useremail = this.signIn.get('userEmail').value;
       let userpassword = this.signIn.get('userPassword').value;
       this.storageKey = useremail;
        let user = {
           email:useremail,
           password:userpassword
        }
        
      this.localData = localStorage.getItem(this.storageKey); // string
      this.localData=JSON.parse(this.localData);  
      console.log(this.localData);
      console.log(this.localData.email +" && "+ useremail +" && "+ this.localData.paswword +" == "+userpassword);
      if(this.localData.email == useremail && this.localData.paswword == userpassword){
        localStorage.setItem('currentUser',this.localData.name);
        this.msg="login Successfull";
      localStorage.setItem("currentUser",this.localData.name);
      }
      else{
        this.msg="Wrong credential";
      }

  }

  constructor() { }

  ngOnInit() {
  }

}




// loginData(){
//   let useremail = this.signIn.get('userEmail').value;
//   let userpassword = this.signIn.get('userPassword').value;
//   this.storageKey = useremail;
//    let user = {
//    email:useremail,
//    password:userpassword
//  }

//    isLogin:boolean = false;

//    this.loginService.checkLogin(user).subscribe(){
//      let usermail = user.email;
//      let password = user.password;
     
//      let userData = localStorage.getItem(user.name);
     
//      if(userData.email == usermail && userData.password == password){
//        isLogin = true;
//      }
     
//    }  
