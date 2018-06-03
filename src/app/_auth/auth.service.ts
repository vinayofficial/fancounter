import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor( private route:Router, private loginService:LoginService) { }

  canActivate(){
      let checkLogin = this.loginService.isLogin;
      if(checkLogin){
          this.route.navigate(['/video']);
          return true;
      }else{
          this.route.navigate(['/signin']);
          return false;
      }
  }

}
