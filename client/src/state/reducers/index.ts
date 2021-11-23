import { createNamedWrapperReducer } from "./helpers";
import fetchDataReducer from "./_ducks/fetchData";

import { REDUCER_NAME as GAME_DETAIL_NAME } from "./gameDetails";
import { combineReducers } from "redux";

const reducers = combineReducers({
  gameDetail: createNamedWrapperReducer(fetchDataReducer, GAME_DETAIL_NAME),
});

export default reducers;
