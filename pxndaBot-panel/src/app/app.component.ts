import { Component } from '@angular/core';
import {RequestServiceService} from "./services/request-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pxndaBot-panel';
  isCollapsed: any;


  constructor(public requestService: RequestServiceService) {

  }
}
