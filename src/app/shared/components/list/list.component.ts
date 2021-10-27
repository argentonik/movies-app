import {Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Entity} from "src/app/core/domain/models/entity";
import IList from "src/app/core/service/interfaces/list.interface";
import {takeUntil} from "rxjs/operators";
import {BaseService} from "src/app/core/service/base-service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() service: BaseService<any>;

  public items: Entity<any>[] = [];
  public page: number;
  public totalResults: number;
  public loading: boolean = true;

  private destroy$ = new Subject();

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  constructor() { }

  public ngOnInit(): void {
    this.service.getList()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: this.onFetchData,
        error: this.onError,
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onPageChange(page: number): void {
    this.loading = true;
    this.service.getList(page)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: this.onFetchData,
        error: this.onError,
      });
  }

  private onFetchData = (res: IList<Entity<any>>): void => {
    this.page = res.page;
    this.totalResults = res.total_results;
    this.items = res.results;
    this.loading = false;
  }

  private onError = (err: any): void => {
    console.log(err);
    this.page = 1;
    this.totalResults = 1;
    this.items = [];
    this.loading = false;
  }
}