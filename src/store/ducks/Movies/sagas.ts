import { call, put } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import api from "./../../../services/api";
import { searchFail, searchSuccess } from "./actions";

import { Payload } from "./types";

export function* searchRequest(payload: Payload): SagaIterator {
  try {
    console.log(payload);
    const { data: response } = yield call(
      api.get,
      `/search/movie?api_key=27495bf0d364fe0cc23f7fe9118b89e4&language=pt-br&query=${payload.searchValue}&page=1&include_adult=false`
    );
    yield put(searchSuccess(response));
  } catch (err) {
    console.error(err);
    yield put(searchFail());
    // alert("Não encontramos esse heroi, tente novamente...");
  }
}
