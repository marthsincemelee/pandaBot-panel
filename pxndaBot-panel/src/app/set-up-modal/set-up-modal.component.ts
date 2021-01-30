import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-set-up-modal',
  templateUrl: './set-up-modal.component.html',
  styleUrls: ['./set-up-modal.component.css']
})
export class SetUpModalComponent implements OnInit {

  isVisible: boolean;
  setupForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.isVisible = true;
    this.setupForm = this.fb.group({
      userId: ['', Validators.required],
      guildId: ['', Validators.required],
      channelId: ['', Validators.required]

    });
  }

  onSubmit(setupFormData): void {
    this.setupForm.reset();
  }

  ngOnInit(): void {

  }

}
