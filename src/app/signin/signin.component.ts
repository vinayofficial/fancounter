import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../_services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [],
  providers: [LoginService]
})
export class SigninComponent implements OnInit {

  constructor(private router:Router ,private _loginService:LoginService) {

    if(localStorage.getItem('authKey')){
      this.router.navigate(['youtube']);
    }

  }
  checkpass:boolean;

  //Login Form
  signIn = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });

  //Login method

  doLogin(){
      let getUsername = this.signIn.get('username').value;
      let getPassword = this.signIn.get('password').value;
      let user = {
        username: getUsername,
        password: getPassword
      }

      this.checkpass = this._loginService.checkLogin(user);
      if(this.checkpass) this.router.navigate(['youtube']);
      console.log('Invalid Credentials');
  }

  ngOnInit() {

  }

}
