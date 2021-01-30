import { Component, OnInit } from '@angular/core';
import {RequestServiceService} from "../services/request-service.service";

@Component({
  selector: 'app-cookie-settings',
  templateUrl: './cookie-settings.component.html',
  styleUrls: ['./cookie-settings.component.css']
})
export class CookieSettingsComponent implements OnInit {

  constructor(public requestService: RequestServiceService) { }

  ngOnInit(): void {
  }

}
