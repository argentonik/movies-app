import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import BasePaginationService from "src/app/core/service/base-pagination.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalResults: number;
  @Input() page: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor(public pagination: BasePaginationService) { }

  ngOnInit(): void {}

  public onPageChange(page: number): void {
    this.pageChanged.emit(page);
  }
}
