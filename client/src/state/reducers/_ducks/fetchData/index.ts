import { AppThunkAction, DuckAction } from "../../../interface";

export interface InitialState<T = unknown> {
  data: T;
  status: {
    loading: boolean;
    receivedAt: number;
  };
}

const initialState = {
  data: undefined,
  status: {
    loading: false,
    receivedAt: undefined,
  },
};

enum ACTION_TYPES {
  "@FETCH_DATA/CLEAR" = "@FETCH_DATA/CLEAR",
  "@FETCH_DATA/REQUEST" = "@FETCH_DATA/REQUEST",
  "@FETCH_DATA/REQUEST_SUCCCESS" = "@FETCH_DATA/REQUEST_SUCCCESS",
  "@FETCH_DATA/REQUEST_FAILURE" = "@FETCH_DATA/REQUEST_FAILURE",
}

const reducer = (state = initialState, action: DuckAction) => {
  switch (action.type) {
    case ACTION_TYPES["@FETCH_DATA/REQUEST"]:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case ACTION_TYPES["@FETCH_DATA/REQUEST_SUCCCESS"]:
      return {
        ...state,
        data: action.payload,
        status: {
          ...state.status,
          loading: false,
          receivedAt: new Date().valueOf(),
        },
      };
    case ACTION_TYPES["@FETCH_DATA/REQUEST_FAILURE"]:
      return {
        ...state,
        data: undefined,
        status: {
          ...state.status,
          loading: false,
          receivedAt: new Date().valueOf(),
        },
      };
    case ACTION_TYPES["@FETCH_DATA/CLEAR"]:
      return {
        ...state,
        data: undefined,
        status: {
          ...state.status,
          receivedAt: undefined,
        },
      };
    default:
      return state
  }
};

export default reducer;

type UrlFormatter = (params: { [key: string]: any }) => string;

export const createClearData = (reducerName: string) => {
  return {
    type: ACTION_TYPES["@FETCH_DATA/CLEAR"],
    name: reducerName,
  }
} 

export const createFetchData =
  (reducerName: string, urlFormatter: UrlFormatter) =>
  (params: any): AppThunkAction =>
  (dispatch, _, { api }) => {
    dispatch({
      type: ACTION_TYPES["@FETCH_DATA/REQUEST"],
      name: reducerName,
    });

    return api
      .get(urlFormatter(params))
      .then((response) => {
        dispatch({
          type: ACTION_TYPES["@FETCH_DATA/REQUEST_SUCCCESS"],
          name: reducerName,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES["@FETCH_DATA/REQUEST_FAILURE"],
          name: reducerName,
          payload: error,
        });
      });
  };
