import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ListComponent} from "./list.component";
import {PaginationModule} from "../pagination/pagination.module";
import {SpinnerModule} from "../spinner/spinner.module";


@NgModule({
  declarations: [
    ListComponent,
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    SpinnerModule,
  ],
})
export class ListModule { }
