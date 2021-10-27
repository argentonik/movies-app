import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PaginationComponent} from "./pagination.component";
import BasePaginationService from "src/app/core/service/base-pagination.service";
import PaginationService from "./pagination.service";


@NgModule({
  declarations: [
    PaginationComponent,
  ],
  exports: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [
    {provide: BasePaginationService, useClass: PaginationService},
  ]
})
export class PaginationModule { }
