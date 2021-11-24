import { AppThunkAction } from "../../interface";
import { createRequest } from "../_ducks/request";

export const GAME_ID_NAME = "GAME_ID";

export const createNewGame =
  (uuid: number): AppThunkAction =>
  (dispatch, _, { localStorage, api }) => {
    const key = "currentGameId";
    const currentGameUUID = localStorage.get(key);

    // if (!!currentGameUUID) {
    //   // const id = api.get(`/match/uuid/${Number.parseInt(currentGameUUID)}`);
    //   // dispatch(getGameMoves(id as number));

    //   return;
    // }

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
