import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from "./core/service/api-service";
import MovieService from "./movie/service/movie.service";
import {NgxsModule} from "@ngxs/store";
import {MovieState} from "./movie/state/movie.state";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      MovieState,
    ]),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    {provide: ApiService, useExisting: MovieService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
