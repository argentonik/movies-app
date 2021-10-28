import { Component, OnInit } from '@angular/core';
import {ApiService} from "src/app/core/service/api-service";
import {Entity} from "src/app/core/domain/models/entity";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(public service: ApiService<Entity<any>>) {}

  public ngOnInit(): void {}
}
