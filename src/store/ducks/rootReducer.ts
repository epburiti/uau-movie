import { combineReducers } from "redux";

import Movies from "./Movies";

const appReducer = combineReducers({
  Movies,
});

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
