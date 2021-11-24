import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Api from "../services/Api";
import LocalStorage from "../services/LocalStorage";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        api: new Api({ url: "/api" }),
        localStorage: new LocalStorage("tic_tac_toe"),
      })
    )
  )
);

export default store;
