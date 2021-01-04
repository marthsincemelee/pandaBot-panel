import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {YoutubeSearchResult} from "../app/models/YoutubeSearchResult";

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  searchResults: Array<any>;
  dataLoaded: boolean;

  constructor(private http: HttpClient) {
    this.searchResults = new Array<YoutubeSearchResult>();
    this.dataLoaded = false;

  }

  async requestSearch(searchPhrase: string): Promise<any> {
    this.dataLoaded = false;
    this.searchResults = [];
    try {
      const response = await this.http.get<any>(' https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC0cOzIF6R89bYiTmy35zinJmDkscsUcsE&q=' + searchPhrase,
        {observe: "response"}).toPromise();

      if (response.status === 200) {
        response.body.items.forEach(video => {
          console.log(video);
          if(video.id.kind === "youtube#video") {
            this.searchResults.push(new YoutubeSearchResult(video.id.kind, video.id.videoId, video.snippet.title, video.snippet.thumbnails, video.snippet.description));
          }
        })
        console.log(this.searchResults);
        this.dataLoaded = true;
      }
    }catch (e) {
      console.log(e);
    }
  }


}
