import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import api from "./../../../services/api";
import { loadRecomendedsSuccess, searchFail, searchSuccess } from "./actions";

import { Payload } from "./types";
import { Console } from "console";

export function* searchRequest(payload: Payload): SagaIterator {
  try {
    const { data: response } = yield call(
      api.get,
      `/search/movie?language=pt-br&query=${payload.searchValue}&page=${payload.page}&include_adult=false`
    );
    yield put(searchSuccess(response));
  } catch (err) {
    console.error(err);
    yield put(searchFail());
    // alert("Não encontramos esse heroi, tente novamente...");
  }
}
export function* loadRecomendeds(): SagaIterator {
  try {
    const { data: response } = yield call(
      api.get,
      `/movie/popular?language=pt-br&page=1`
    );
    yield put(loadRecomendedsSuccess(response));
  } catch (err) {
    console.error(err);
    yield put(searchFail());
    // alert("Não encontramos esse heroi, tente novamente...");
  }
}
