import { MoviesTypes } from "./types";

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const searchRequest = (searchValue: String) => ({
  type: MoviesTypes.SEARCH_REQUEST,
  searchValue,
});

export const searchSuccess = (object: any) => ({
  type: MoviesTypes.SEARCH_SUCCESS,
  payload: object,
});
export const searchFail = () => ({
  type: MoviesTypes.SEARCH_FAIL,
});
