import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import {BaseService} from "src/app/core/service/base-service";
import MovieService from "src/app/movie/service/movie.service";


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule
  ],
  providers: [
    {provide: BaseService, useClass: MovieService}
  ]
})
export class MovieDetailModule { }
