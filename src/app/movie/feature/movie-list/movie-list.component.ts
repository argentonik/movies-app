import { Component, OnInit } from '@angular/core';
import {BaseService} from "src/app/core/service/base-service";
import {Entity} from "src/app/core/domain/models/entity";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(public service: BaseService<Entity<any>>) {}

  public ngOnInit(): void {}
}
