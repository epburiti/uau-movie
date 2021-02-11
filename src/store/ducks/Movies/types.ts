export enum MoviesTypes {
  SEARCH_REQUEST = "@search/SEARCH_REQUEST",
  SEARCH_SUCCESS = "@search/SEARCH_SUCCESS",
  LOAD_RECOMENDEDS_REQUEST = "@search/LOAD_RECOMENDEDS_REQUEST",
  LOAD_RECOMENDEDS_SUCCESS = "@search/LOAD_RECOMENDEDS_SUCCESS",
  SEARCH_FAIL = "@search/SEARCH_FAIL",
}

//
export interface Payload {
  searchValue: string;
  page: number;
  type: string;
}

export interface Movie {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: Boolean;
  vote_average: number;
  vote_count: number;
}
