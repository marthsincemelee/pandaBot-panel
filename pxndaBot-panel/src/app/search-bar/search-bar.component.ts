import { Component, OnInit } from '@angular/core';
import {RequestServiceService} from "../services/request-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;

  constructor(public requestService: RequestServiceService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchField: [null, Validators.required]
    });
  }

  currentInput: string;


  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.searchForm.value.searchField);
    if(this.searchForm.valid){
      this.requestService.requestSearch(this.searchForm.value.searchField)
    }
  }

}
