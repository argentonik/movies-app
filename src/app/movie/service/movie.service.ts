import {Service} from "src/app/core/service/service";
import {Observable, of} from "rxjs";
import IMovie from "src/app/movie/domain/movie.interface";
import IList from "src/app/core/service/interfaces/list.interface";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

enum ApiConfig {
  url = 'http://api.themoviedb.org/3',
  apiKey = 'ebea8cfca72fdff8d2624ad7bbf78e4c'
}

@Injectable()
export default class MovieService extends Service<IMovie> {
  constructor(private httpClient: HttpClient) {
    super();
  }

  public getList(): Observable<IList<IMovie>> {
    return this.httpClient.get<any>(`${ApiConfig.url}/movie/now_playing?api_key=${ApiConfig.apiKey}`);
  }

   public getById(id: number): Observable<IMovie> {
    return this.httpClient.get<any>(`${ApiConfig.url}/movie/${id}?api_key=${ApiConfig.apiKey}`);
   }
}
