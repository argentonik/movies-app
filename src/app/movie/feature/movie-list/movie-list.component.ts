import { Component, OnInit } from '@angular/core';
import {Service} from "src/app/core/service/service";
import MovieService from "src/app/movie/service/movie.service";
import Movie from "src/app/movie/domain/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [
    {
      provide: Service, useClass: MovieService
    }
  ]
})
export class MovieListComponent implements OnInit {

  constructor(private service: Service<Movie>) {
  }

  public ngOnInit(): void {
    console.log('movie list');
    this.service.getList().subscribe(console.log);
  }

}
