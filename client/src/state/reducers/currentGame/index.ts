import { combineReducers } from "redux";

import { createNamedWrapperReducer } from "../helpers";
import requestReducer from "../_ducks/request";
import { ADD_MOVE } from "./AddMove";
import { GAME_ID_NAME } from "./CreateNewGame";
import { MOVES_NAME } from "./GetMoves";

export default combineReducers({
  gameId: createNamedWrapperReducer(requestReducer, GAME_ID_NAME),
  addMove: createNamedWrapperReducer(requestReducer, ADD_MOVE),
  moves: createNamedWrapperReducer(requestReducer, MOVES_NAME),
});
