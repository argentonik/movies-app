export default interface IList<T> {
  page: number;
  results: T[];
  totalPages: number;
  totalResults: number;
}
