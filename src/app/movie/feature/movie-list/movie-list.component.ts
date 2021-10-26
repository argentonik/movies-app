import { Component, OnInit } from '@angular/core';
import {Service} from "src/app/core/service/service";
import MovieService from "src/app/movie/service/movie.service";
import Movie from "src/app/movie/domain/movie";
import {take} from "rxjs/operators";

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
  public items: Movie[] = [];

  constructor(private service: Service<Movie>) {
  }

  public ngOnInit(): void {
    this.service.getList().pipe(take(1)).subscribe(res => {
      this.items = res.results;
      console.log(this.items);
    });
  }

}
