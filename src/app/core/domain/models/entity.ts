export abstract class Entity<T> {
  protected readonly _id: number;
  public readonly props: T;

  protected constructor(props: T, id: number) {
    this._id = id;
    this.props = props;
  }
}
