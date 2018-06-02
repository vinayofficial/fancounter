import { Injectable } from '@angular/core';
import { Route, RouterEvent, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }
  
  checkLogin(user){
    if(user.username === "vinay" && user.password === "12345"){
      let token = btoa(user.username+user.password);
      localStorage.setItem('authKey',token);
      //localStorage.setItem('username',user.username)
      return true;
    }else return false;
  }

}
