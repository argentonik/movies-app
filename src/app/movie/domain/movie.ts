import IMovie from "./movie.interface";
import {Entity} from "src/app/core/domain/models/entity";

export default class Movie extends Entity<IMovie> {
  constructor(props: IMovie) {
    super(props);
  }

  get id(): number {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  get posterPath(): string|null {
    return this.props.poster_path;
  }

  get adult(): boolean {
    return this.props.adult;
  }

  get overview(): string {
    return this.props.overview;
  }

  get releaseDate(): string {
    return this.props.release_date;
  }

  get backdropPath(): string|null {
    return this.props.backdrop_path;
  }

  get voteAverage(): number {
    return this.props.vote_average;
  }
}
