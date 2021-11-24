import { ApiProperties, Method } from "../../../../services/Api";
import { AppThunkAction, DuckAction } from "../../../interface";

export interface InitialState<T = any> {
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
  "@REQUEST/CLEAR" = "@REQUEST/CLEAR",
  "@REQUEST/MAKE" = "@REQUEST/MAKE",
  "@REQUEST/SUCCCESS" = "@REQUEST/SUCCCESS",
  "@REQUEST/FAILURE" = "@REQUEST/FAILURE",
}

const reducer = (state = initialState, action: DuckAction) => {
  switch (action.type) {
    case ACTION_TYPES["@REQUEST/MAKE"]:
      return {
        ...state,
        status: {
          ...state.status,
          loading: true,
        },
      };
    case ACTION_TYPES["@REQUEST/SUCCCESS"]:
      return {
        ...state,
        data: action.payload,
        status: {
          ...state.status,
          loading: false,
          receivedAt: new Date().valueOf(),
        },
      };
    case ACTION_TYPES["@REQUEST/FAILURE"]:
      return {
        ...state,
        data: undefined,
        status: {
          ...state.status,
          loading: false,
          receivedAt: new Date().valueOf(),
        },
      };
    case ACTION_TYPES["@REQUEST/CLEAR"]:
      return {
        ...state,
        data: undefined,
        status: {
          ...state.status,
          receivedAt: undefined,
        },
      };
    default:
      return state;
  }
};

export default reducer;

type UrlFormatter = (params: { [key: string]: any }) => string;

export const createClearData = (reducerName: string) => {
  return {
    type: ACTION_TYPES["@REQUEST/CLEAR"],
    name: reducerName,
  };
};

interface RequestFactoryParams {
  urlFormatter: UrlFormatter;
  method?: Method;
  apiParams?: ApiProperties;
}

export const createRequest =
  (
    reducerName: string,
    { urlFormatter, method, apiParams }: RequestFactoryParams
  ) =>
  (params?: any): AppThunkAction =>
  (dispatch, _, { api }) => {
    dispatch({
      type: ACTION_TYPES["@REQUEST/MAKE"],
      name: reducerName,
    });

    return api
      .request(urlFormatter(params), apiParams || { method })
      .then((response) => {
        dispatch({
          type: ACTION_TYPES["@REQUEST/SUCCCESS"],
          name: reducerName,
          payload: response,
        });
        return response;
      })
      .catch((error) => {
        dispatch({
          type: ACTION_TYPES["@REQUEST/FAILURE"],
          name: reducerName,
          payload: error,
        });
      });
  };
