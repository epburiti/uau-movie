import { MoviesTypes } from "./types";
import { Movie } from "./types";
// primeiro parametro é o type do action e o segundo um pay load se tiver
export const searchRequest = (searchValue: String, page: number) => ({
  type: MoviesTypes.SEARCH_REQUEST,
  searchValue,
  page,
});

export const searchSuccess = (object: Movie) => ({
  type: MoviesTypes.SEARCH_SUCCESS,
  payload: object,
});
export const loadRecomendedsRequest = () => ({
  type: MoviesTypes.LOAD_RECOMENDEDS_REQUEST,
});

export const loadRecomendedsSuccess = (object: Movie) => ({
  type: MoviesTypes.LOAD_RECOMENDEDS_SUCCESS,
  payload: object,
});

export const searchFail = () => ({
  type: MoviesTypes.SEARCH_FAIL,
});
