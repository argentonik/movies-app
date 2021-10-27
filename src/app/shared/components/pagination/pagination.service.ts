import BasePaginationService from "src/app/core/service/base-pagination.service";
import {Injectable} from "@angular/core";

@Injectable()
export default class PaginationService extends BasePaginationService {
  public readonly pageSize: number = 20;
  public readonly maxSize: number = 3;
  public readonly firstLabel: string = 'First';
  public readonly lastLabel: string = 'Last';
  public readonly previousLabel: string = 'Prev';
  public readonly nextLabel: string = 'Next';

  public onPageChange(page: number): void {
    console.log('number of page', page);
  }
}
