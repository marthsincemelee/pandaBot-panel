import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import set = Reflect.set;
import {RequestServiceService} from "../services/request-service.service";

@Component({
  selector: 'app-set-up-modal',
  templateUrl: './set-up-modal.component.html',
  styleUrls: ['./set-up-modal.component.css']
})
export class SetUpModalComponent implements OnInit {


  isVisible: boolean;
  setupForm: FormGroup;


  constructor(private fb: FormBuilder, private cookieService: CookieService, public requestService: RequestServiceService) {
    this.isVisible = !this.requestService.isSetupDone;
    this.setupForm = this.fb.group({
      userId: ['', Validators.required],
      guildId: ['', Validators.required],
      channelId: ['', Validators.required]

    });
  }

  onSubmit(setupFormData): void {

    if(this.setupForm.valid){
      this.cookieService.set('botSetupDone', 'true');
      this.cookieService.set('userId',setupFormData.userId);
      this.cookieService.set('guildId',setupFormData.guildId);
      this.cookieService.set('channelId', setupFormData.channelId);

      this.setupForm.reset();
      this.requestService.getCookieData();
      this.isVisible = false;
    }
  }

  ngOnInit(): void {

  }

}
