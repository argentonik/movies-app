export default interface IMovie {
  title: string,
  posterPath: string|null,
  adult: boolean,
  overview: string,
  releaseDate: string,
  backdropPath: string|null,
  voteAverage: number,
}
