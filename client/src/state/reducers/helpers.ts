import { useSelector } from "react-redux";
import { AppState, DuckAction } from "../interface";

export function createNamedWrapperReducer<T = any>(
  reducerFunction: Function,
  reducerName: string
) {
  return (state: T, action: DuckAction) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;

    return reducerFunction(state, action);
  };
}

type Selector = (state: AppState) => any;

export const useAppSelector = (selector: Selector) => useSelector(selector);
