import { AppThunkAction } from "../../interface";
import { createClearData, createRequest } from "../_ducks/request";

export const MOVES_NAME = "MOVES_NAME";

export const clearMoves = createClearData(MOVES_NAME);

export const getGameMoves =
  (gameId: number): AppThunkAction =>
  (dispatch) => {
    dispatch(
      createRequest(MOVES_NAME, {
        urlFormatter: () => `/match/${gameId}/moves`,
      })()
    );
  };
