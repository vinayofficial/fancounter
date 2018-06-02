import { Injectable } from '@angular/core';
import { Route, RouterEvent, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin:boolean;
  constructor(private route:Router) { }

  doLogin(user){    
    if(user.username === "vinay" && user.password === "12345"){
      this.isLogin = true;
      let token = btoa(user.username+user.password);
      localStorage.setItem('authKey',token);
      console.log('You\'re Login with token id: '+token);
      this.isLogin = true;
      this.route.navigate(['/']);
    }else{
      this.isLogin = false;
      console.log('Invalid Credentials');
    }    
  }

}
