import IMovie from "./movie.interface";
import {AggregateRoot} from "src/app/core/domain/AggregateRoot";

export default class Movie extends AggregateRoot<IMovie> {
  constructor(props: IMovie, id: number) {
    super(props, id);
  }

  get id() {
    return this._id;
  }

  get title() {
    return this.props.title;
  }

  get posterPath() {
    return this.props.posterPath;
  }

  get adult() {
    return this.props.adult;
  }

  get overview() {
    return this.props.overview;
  }

  get releaseDate() {
    return this.props.releaseDate;
  }

  get backdropPath() {
    return this.props.backdropPath;
  }

  get voteAverage() {
    return this.props.voteAverage;
  }
}
