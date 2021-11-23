import { createNamedWrapperReducer } from "./helpers";
import fetchDataReducer from "./_ducks/fetchData";

import { REDUCER_NAME as CURRENT_GAME_NAME } from "./currentGame";
import { combineReducers } from "redux";

const reducers = combineReducers({
  currentGame: createNamedWrapperReducer(fetchDataReducer, CURRENT_GAME_NAME),
});

export default reducers;
