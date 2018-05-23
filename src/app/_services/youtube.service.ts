import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  constructor(private _http: Http) { }

  //Get Data
  fetchData(KEYWORD){
    // let url ="https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=15&key=AIzaSyCx4qot3_1usvJv0Zxv0FCrdpONDILYSOM"
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+KEYWORD+"&type=video&key=AIzaSyCx4qot3_1usvJv0Zxv0FCrdpONDILYSOM"
    return this._http.get(url);
  }
}
/*
10PM sleep
4am wake up.
4.30am start recordings.
10am get ready for office  //5.5hr
7.30pm leave from office
*/
