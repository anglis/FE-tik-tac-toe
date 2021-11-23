import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Api from "../services/Api";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        api: new Api(""),
      })
    )
  )
);

export default store;
