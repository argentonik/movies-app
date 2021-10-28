import {Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {ApiService} from "src/app/core/service/api-service";
import {Observable, Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {FetchPage} from "src/app/movie/state/movie.actions";
import {MovieState} from "src/app/movie/state/movie.state";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() title: string;

  @Select(MovieState.getPage) page$: Observable<any>;
  @Select(MovieState.getTotalResults) totalResults$: Observable<any>;
  @Select(MovieState.getItems) items$: Observable<any>;
  @Select(MovieState.getLoading) loading$: Observable<any>;

  private destroy$ = new Subject();

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.page$.subscribe(page => {
      this.store.dispatch(new FetchPage(page)).pipe(takeUntil(this.destroy$)).subscribe();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onPageChange(page: number): void {
    this.store.dispatch(new FetchPage(page)).pipe(takeUntil(this.destroy$)).subscribe();
  }
}
