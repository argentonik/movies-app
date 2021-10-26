import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import IList from "./interfaces/list.interface";

@Injectable()
export abstract class Service<T> {

  public abstract getList(): Observable<IList<T>>;

  public abstract getById(id: number): Observable<T>;
}
