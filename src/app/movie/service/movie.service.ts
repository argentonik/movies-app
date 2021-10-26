import {Service} from "src/app/core/service/service";
import {Observable, of} from "rxjs";
import IList from "src/app/core/service/interfaces/list.interface";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import Movie from "../domain/movie";
import IMovie from "../domain/movie.interface";
import {map} from "rxjs/operators";

enum ApiConfig {
  url = 'http://api.themoviedb.org/3',
  apiKey = 'ebea8cfca72fdff8d2624ad7bbf78e4c'
}

@Injectable()
export default class MovieService extends Service<Movie> {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public getList(): Observable<IList<Movie>> {
    return this.httpClient.get<IList<IMovie>>(`${ApiConfig.url}/movie/now_playing?api_key=${ApiConfig.apiKey}`)
      .pipe(map(res => ({...res, results: res.results.map((item: IMovie) => new Movie(item))}) ));
  }

   public getById(id: number): Observable<Movie> {
    return this.httpClient.get<IMovie>(`${ApiConfig.url}/movie/${id}?api_key=${ApiConfig.apiKey}`)
      .pipe(map((item: IMovie) => new Movie(item)));
   }
}
