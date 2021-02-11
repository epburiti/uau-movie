import { MoviesTypes } from "./types";
import produce from "immer";

const INITIAL_STATE = {
  searchValue: "",
  data: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  loading: false,
  error: false,
  recomended: false,
};

const reducer = (state = INITIAL_STATE, action: any) => {
  console.log("action: ", action);
  switch (action.type) {
    case MoviesTypes.SEARCH_REQUEST:
    case MoviesTypes.LOAD_RECOMENDEDS_REQUEST:
      return produce(state, (draft) => {
        draft.data = {
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0,
        };
        draft.loading = true;
        draft.error = false;
        draft.searchValue = action.searchValue;
      });
    case MoviesTypes.SEARCH_SUCCESS:
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
        draft.recomended = false;
      });
    case MoviesTypes.LOAD_RECOMENDEDS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
        draft.recomended = true;
      });
    case MoviesTypes.SEARCH_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = false;
      });
    default:
      return state;
  }
};

export default reducer;
