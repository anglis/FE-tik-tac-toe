import { Action, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Move } from "../components/match/_shared/Grid/interface";
import Api from "../services/Api";
import LocalStorage from "../services/LocalStorage";
import { InitialState as RequestWrapper } from "./reducers/_ducks/request";

export interface AppState {
  gameDetail: RequestWrapper<Move[]>;
  currentGame: {
    gameId: RequestWrapper<number>;
    addMove: RequestWrapper<void>;
    moves: RequestWrapper<Move[]>;
  };
}

interface ExtraThunkArg {
  api: Api;
  localStorage: LocalStorage
}

export interface DuckAction extends AnyAction {
  name: string;
}

export type AppThunkAction<T = any> = ThunkAction<
  T,
  AppState,
  ExtraThunkArg,
  Action
>;

type GetState = (state: AppState) => unknown;

export type AppThunkDispatch<T = any> = (
  dispatch: ThunkDispatch<AppState, ExtraThunkArg, Action>,
  getState?: GetState,
  extraArgument?: ExtraThunkArg
) => T;
