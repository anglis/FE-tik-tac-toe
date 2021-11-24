import { Action, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Move } from "../components/match/_shared/Grid/interface";
import Api from "../services/Api";
import LocalStorage from "../services/LocalStorage";
import { InitialState as RequestWrapper } from "./reducers/_ducks/request";
import { Match } from "./reducers/currentGame/CreateNewGame";

export interface AppState {
  currentGame: {
    match: RequestWrapper<Match>;
    addMove: RequestWrapper<void>;
    moves: RequestWrapper<Move[]>;
  };
}

interface ExtraThunkArg {
  api: Api;
  localStorage: LocalStorage;
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
