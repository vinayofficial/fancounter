import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private _loginService:LoginService) { }

  isLogin;

  signIn = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });

  Login(){
      let getUsername = this.signIn.get('username').value;
      let getPassword = this.signIn.get('password').value;
      let user = {
        Uname: getUsername,
        Pass: getPassword
      }

      this.isLogin=localStorage.getItem('auth');
      this._loginService.isLogin
     
  }
  ngOnInit() {
    
  }
}
