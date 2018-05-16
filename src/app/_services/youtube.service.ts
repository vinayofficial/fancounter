import { Injectable } from '@angular/core';
import { Http2Server } from 'http2';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {

  APIURL:string = "";

  constructor(private http:Http2Server) { }

  //Get Data
  fetchData(){
    return this.http.get(APIURL)
  }

}
