import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../_services/youtube.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styles: [],
  providers: [YoutubeService]
})
export class SearchResultsComponent implements OnInit {

  constructor(private youtubeService:YoutubeService) { }

  ngOnInit() {
    
  }

}
