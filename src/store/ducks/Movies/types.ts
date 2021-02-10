export enum MoviesTypes {
  SEARCH_REQUEST = "@search/SEARCH_REQUEST",
  SEARCH_SUCCESS = "@search/SEARCH_SUCCESS",
  SEARCH_FAIL = "@search/SEARCH_FAIL",
}

//
export interface Payload {
  searchValue: string;
  type: string;
}
