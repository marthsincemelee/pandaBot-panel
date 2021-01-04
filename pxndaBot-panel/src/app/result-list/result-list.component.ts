import { Component, OnInit } from '@angular/core';
import {RequestServiceService} from "../../services/request-service.service";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(public requestService: RequestServiceService) { }

  ngOnInit(): void {
  }

}
