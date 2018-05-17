import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {

  APIURL:string = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCx4qot3_1usvJv0Zxv0FCrdpONDILYSOM&forUsername=vishAcademy&part=snippet,id&order=date&maxResults=20";

  constructor(private _http: Http) { }

  //Get Data
  fetchData(){
    return this._http.get(this.APIURL);
  }
  
}
