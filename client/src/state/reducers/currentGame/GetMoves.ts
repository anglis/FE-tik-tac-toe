import { AppThunkAction } from "../../interface";
import { createRequest } from "../_ducks/request";

export const MOVES_NAME = "MOVES_NAME";

export const getGameMoves =
  (gameId: number): AppThunkAction =>
  (dispatch) => {
    dispatch(
      createRequest(MOVES_NAME, {
        urlFormatter: (id) => `/match/${gameId}`,
        method: "GET",
      })
    );
  };
