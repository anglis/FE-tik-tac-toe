import { combineReducers } from "redux";
import { createNamedWrapperReducer } from "./helpers";
import requestReducer from "./_ducks/request";

import { REDUCER_NAME as GAME_DETAIL_NAME } from "./gameDetails";
import currentGameReducer from "./currentGame";

const reducers = combineReducers({
  gameDetail: createNamedWrapperReducer(requestReducer, GAME_DETAIL_NAME),
  currentGame: currentGameReducer,
});

export default reducers;
