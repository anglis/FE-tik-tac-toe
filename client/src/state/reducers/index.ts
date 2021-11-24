import { combineReducers } from "redux";

import currentGameReducer from "./currentGame";

const reducers = combineReducers({
  currentGame: currentGameReducer,
});

export default reducers;
