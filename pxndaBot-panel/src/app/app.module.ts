import { ResultListComponent } from './result-list/result-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { YoutubeWindowComponent } from './youtube-window/youtube-window.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzGridModule} from "ng-zorro-antd";
import { SongQueueComponent } from './song-queue/song-queue.component';
import { NzModalModule } from 'ng-zorro-antd/modal';


registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    YoutubeWindowComponent,
    ResultListComponent,
    SearchBarComponent,
    SongQueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzCardModule,
    NzModalModule,
    NzButtonModule,
    NzListModule,
    NzIconModule,
    HttpClientModule,
    NzListModule,
    NzLayoutModule,
    NzInputModule,
    BrowserAnimationsModule,
    NgbModule,
    NzGridModule
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
