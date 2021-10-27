import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import IList from "./interfaces/list.interface";

@Injectable()
export abstract class BaseService<T> {

  public abstract getList(page?: number): Observable<IList<T>>;

  public abstract getById(id: number): Observable<T>;
}
