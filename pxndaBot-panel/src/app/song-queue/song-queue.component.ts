import { Component, OnInit } from '@angular/core';
import {RequestServiceService} from "../services/request-service.service";

@Component({
  selector: 'app-song-queue',
  templateUrl: './song-queue.component.html',
  styleUrls: ['./song-queue.component.css']
})
export class SongQueueComponent implements OnInit {

  constructor(public requestService: RequestServiceService) { }

  ngOnInit(): void {
  }

}
