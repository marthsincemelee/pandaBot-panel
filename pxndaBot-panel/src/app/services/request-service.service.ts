import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {YoutubeSearchResult} from "../models/YoutubeSearchResult";

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  searchResults: Array<any>;
  dataLoaded: boolean;

  guildID = '419133817966559232';
  userID = '227377144324554753';
  channelID = '693194667474288671';
  requestURL = 'https://api.cloudypanda.de/addSong'

  constructor(private http: HttpClient) {
    this.searchResults = new Array<YoutubeSearchResult>();
    this.dataLoaded = false;

  }

  startSong(youtubeId: string) {
    const data = {
      UserID: this.userID,
      ServerID: this.guildID,
      ChannelID: this.channelID,
      SongURL: 'https://youtube.com/watch?v=' + youtubeId
    };
    console.log('requesting now');
    const response = this.http.post(this.requestURL, data).toPromise();
    console.log('requested stopped');
  }

  async requestSearch(searchPhrase: string): Promise<any> {
    console.log('this is the searchphrase: ' + searchPhrase);
    this.dataLoaded = false;
    this.searchResults = [];
    try {
      const response = await this.http.get<any>('http://localhost:3000/' + searchPhrase,
        {observe: "response"}).toPromise();

      if (response.status === 200) {
        response.body.items.forEach(video => {
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
