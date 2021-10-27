import {Injectable} from "@angular/core";

@Injectable()
export default abstract class BasePaginationService {
  public readonly pageSize: number;
  public readonly maxSize: number;
  public readonly boundaryLinks: boolean = true;
  public readonly firstLabel: string;
  public readonly lastLabel: string;
  public readonly previousLabel: string;
  public readonly nextLabel: string;
}
