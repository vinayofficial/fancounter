import { Injectable } from '@angular/core';
import { Route, RouterEvent, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin:boolean;
  constructor(private route:Router) { }

  Login(user){    
    if(user.username === "John" && user.password === "john123"){
      let token = btoa(user.username+user.password);
      localStorage.setItem('authKey',token);
      this.route.navigate(['/']);
    } 
  }
}
