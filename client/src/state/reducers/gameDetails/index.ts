import { createClearData, createRequest } from "../_ducks/request";

export const REDUCER_NAME = "GAME_DETAIL";

export const clearCurrentGame = createClearData(REDUCER_NAME);
export const fetchCurrentGame = createRequest(REDUCER_NAME, {
  urlFormatter: ({ id }) => {
    return `/match/${id}`;
  },
  method: "GET",
});
