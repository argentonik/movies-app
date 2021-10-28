import Movie from "../domain/movie";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {ApiService} from "../../core/service/api-service";
import {Injectable} from "@angular/core";
import {FetchPage} from "./movie.actions";
import {catchError, tap} from "rxjs/operators";
import {EMPTY, of} from "rxjs";


export class MoviesStateModel {
  page: number;
  totalResults: number;
  items: Movie[];
  loading: boolean;
}

@State<MoviesStateModel>({
  name: 'movies',
  defaults: {
    page: 1,
    totalResults: 0,
    items: [],
    loading: false,
  }
})
@Injectable()
export class MovieState {
  constructor(private apiService: ApiService<Movie>) {}

  @Selector()
  static getPage(state: MoviesStateModel) {
    return state.page;
  }

  @Selector()
  static getTotalResults(state: MoviesStateModel) {
    return state.totalResults;
  }

  @Selector()
  static getItems(state: MoviesStateModel) {
    return state.items;
  }

  @Selector()
  static getLoading(state: MoviesStateModel) {
    return state.loading;
  }

  @Action(FetchPage)
  fetchPage({getState, patchState}: StateContext<MoviesStateModel>, {payload}: FetchPage) {
    patchState({
      loading: true,
    });
    return this.apiService.getList(payload)
      .pipe(
        tap((res) => {
          patchState({
            page: payload,
            totalResults: res.total_results,
            items: res.results,
            loading: false,
          });
        }),
        catchError((err: any) => {
          patchState({
            page: 1,
            totalResults: 1,
            items: [],
            loading: false,
          });
          return of(EMPTY);
        })
      )
  }
}
