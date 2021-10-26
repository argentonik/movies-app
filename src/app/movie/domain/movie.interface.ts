export default interface IMovie {
  id: number;
  title: string,
  poster_path: string|null,
  adult: boolean,
  overview: string,
  release_date: string,
  backdrop_path: string|null,
  vote_average: number,
}
