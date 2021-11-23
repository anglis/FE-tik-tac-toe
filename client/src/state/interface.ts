import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import Api from "../services/Api";

export interface AppState {}

interface ExtraThunkArg {
  api: Api;
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
