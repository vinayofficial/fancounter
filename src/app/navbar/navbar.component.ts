import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { YoutubeService } from '../_services/youtube.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  providers: [YoutubeService]
})
export class NavbarComponent implements OnInit {
  public result:Array<any>;
  
  test:any="test";
  constructor(private youtubeService:YoutubeService, private router:Router) { }

  loginUser:any;
  removeUser:any;
  checkLogin:boolean=false;

  ngOnInit() {

    if(localStorage.getItem("authKey")){
        this.loginUser = localStorage.getItem("username");
        this.checkLogin=true;
        console.log(this.loginUser+" condition is "+this.checkLogin);
    }
    else {
        console.log("condition false");
    }
  }

  searchForm = new FormGroup({
    inputKeys: new FormControl()
  })

  searchData(){
    let data = this.searchForm.get('inputKeys').value;
    this.youtubeService.fetchData(data).subscribe(response => {
      console.log(response.json())
    })
  }

  logout(){
    localStorage.removeItem('authKey');
    this.router.navigate(['/signin'])
  }

}
