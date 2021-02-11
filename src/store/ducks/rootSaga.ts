import { all, takeLatest } from "redux-saga/effects";
import { MoviesTypes } from "./Movies/types";
import { loadRecomendeds, searchRequest } from "./Movies/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(MoviesTypes.SEARCH_REQUEST, searchRequest),
    takeLatest(MoviesTypes.LOAD_RECOMENDEDS_REQUEST, loadRecomendeds),
  ]);
}
