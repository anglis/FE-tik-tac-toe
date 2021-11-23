import { createClearData, createFetchData } from "../_ducks/fetchData";

export const REDUCER_NAME = "GAME_DETAIL";

export const clearCurrentGame = createClearData(REDUCER_NAME);
export const fetchCurrentGame = createFetchData(REDUCER_NAME, ({ id }) => {
  return `/match/${id}`;
});
