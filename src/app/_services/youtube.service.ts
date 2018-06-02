import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  constructor(private _http: Http) { }

  //Get Data
  fetchData(KEYWORD){
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+KEYWORD+"&type=video&key=AIzaSyCx4qot3_1usvJv0Zxv0FCrdpONDILYSOM"
    return this._http.get(url);
  }


  loginService(StorageKey){
    
    let key = localStorage
    return key;
  }

}
