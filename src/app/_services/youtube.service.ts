import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {

  APIURL:string = "";

  constructor(private http:Http) { }

  //Get Data
  fetchData(){
    this.http.get('API_PATH_HERE');
  }

}
