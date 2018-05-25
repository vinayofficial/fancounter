import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { allResolved } from 'q';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  storageData="";
  storageKey="";
  // user="";
  signUp = new FormGroup({
    userName : new FormControl('', Validators.required),
    userEmail : new FormControl('', Validators.required),
    userPassword : new FormControl('', Validators.required)

  });
  signupData(){
       let username = this.signUp.get('userName').value;
       let useremail = this.signUp.get('userEmail').value;
       let userpassword = this.signUp.get('userPassword').value;
       this.storageKey = useremail;
       console.log(username,useremail,userpassword);
       let alldata=username + useremail + userpassword;
        let user = {
        name: username,
        email:useremail,
        paswword:userpassword
      }
       this.storageData = JSON.stringify(user);
       if(localStorage.getItem(this.storageKey) === null){
       localStorage.setItem(this.storageKey,this.storageData);
       }
       else{
         console.log("user allready exist")
       }

  }

  constructor() { }

  ngOnInit() {
  }

}
