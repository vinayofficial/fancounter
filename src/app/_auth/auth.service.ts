import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor( private route:Router) { }

  canActivate(){
      if(localStorage.getItem('authKey')) return true;
      this.route.navigate(['/signin']); 
      return false;
  }
}
