import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [],
  providers: [LoginService]
})
export class SigninComponent implements OnInit {

  constructor(private _loginService:LoginService) { }

  signIn = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  });

  doLogin(){
      let getUsername = this.signIn.get('username').value;
      let getPassword = this.signIn.get('password').value;
      let user = {
        username: getUsername,
        password: getPassword
      }
      console.log('useranme: '+user.username+' password: '+user.password);
      this._loginService.doLogin(user)
  }

  ngOnInit() {

  }

}
