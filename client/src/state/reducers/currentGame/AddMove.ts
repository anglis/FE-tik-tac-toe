import { Move } from "../../../components/match/_shared/Grid/interface";
import { AppThunkAction } from "../../interface";
import { createRequest } from "../_ducks/request";
import { getGameMoves } from "./GetMoves";

export const ADD_MOVE = "ADD_MOVE";

export const addMove =
  (id: number, move: Move): AppThunkAction =>
  (dispatch) => {
    dispatch<Promise<unknown>>(
      createRequest(ADD_MOVE, {
        urlFormatter: () => `/match/${id}`,
        apiParams: {
          method: "PUT",
          body: move,
        },
      })()
    ).then(() => dispatch(getGameMoves(id)));
  };
