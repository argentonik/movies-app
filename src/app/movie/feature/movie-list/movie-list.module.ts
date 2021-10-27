import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import {PaginationModule} from "src/app/shared/components/pagination/pagination.module";
import {BaseService} from "src/app/core/service/base-service";
import MovieService from "src/app/movie/service/movie.service";
import {ListModule} from "src/app/shared/components/list/list.module";


@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    PaginationModule,
    ListModule,
  ],
  providers: [
    {provide: BaseService, useClass: MovieService}
  ]
})
export class MovieListModule { }
