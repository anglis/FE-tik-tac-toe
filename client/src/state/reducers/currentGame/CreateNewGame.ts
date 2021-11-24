import { ThunkAction } from "redux-thunk";
import { AppThunkAction } from "../../interface";
import { createClearData, createRequest } from "../_ducks/request";
import { clearAddMove } from "./AddMove";
import { clearMoves, getGameMoves } from "./GetMoves";

export const GAME_ID_NAME = "GAME_ID";
const key = "currentGameId";

export interface Match {
  id: number;
  uuid: number;
}

export const clearGame = createClearData(GAME_ID_NAME);

export const getByUUID =
  (uuid: string): AppThunkAction =>
  (dispatch) => {
    return dispatch<Promise<Match>>(
      createRequest(GAME_ID_NAME, {
        urlFormatter: () => `/match/getByUuid/${uuid}`,
        method: "GET",
      })()
    );
  };

export const wipeMatch: AppThunkAction = (dispatch, _, { localStorage }) => {
  dispatch(clearGame);
  dispatch(clearAddMove);
  dispatch(clearMoves);
  localStorage.clearItem(key);
};

export const creactOrLoadNewGame =
  (uuid: number): AppThunkAction =>
  async (dispatch, _, { localStorage }) => {
    const currentGameUUID = localStorage.get(key);

    if (!!currentGameUUID) {
      const match = await dispatch(getByUUID(currentGameUUID));

      if (match) {
        await dispatch(getGameMoves(match.id as number));
      }

      return;
    }

    dispatch(createNewGame(uuid));
  };

export const createNewGame =
  (uuid: number): AppThunkAction =>
  async (dispatch, _, { localStorage }) => {
    localStorage.set(key, JSON.stringify(uuid));

    dispatch(
      createRequest(GAME_ID_NAME, {
        urlFormatter: () => "/match/new",
        apiParams: {
          body: JSON.stringify({ uuid: uuid }),
          method: "POST",
        },
      })()
    );
  };
