import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/service/api-service";
import Movie from "../../domain/movie";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public item: Movie;

  constructor(private service: ApiService<Movie>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    this.service.getById(id).pipe(take(1)).subscribe(res => {
      this.item = res;
    })
  }

}
