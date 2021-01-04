import { Component, OnInit } from '@angular/core';
import {RequestServiceService} from "../../services/request-service.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(public requestService: RequestServiceService) { }

  currentInput: string;

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('clicked');
    this.requestService.requestSearch('shark');
  }

}
