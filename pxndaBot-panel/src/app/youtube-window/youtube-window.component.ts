import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-window',
  templateUrl: './youtube-window.component.html',
  styleUrls: ['./youtube-window.component.css']
})
export class YoutubeWindowComponent implements OnInit {

  currentUrl: string;

  constructor() {
    this.currentUrl = 'https://www.youtube.com';
   }

  ngOnInit(): void {
  }

}
