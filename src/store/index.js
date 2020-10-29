import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { isDevEnv } from "../utils/utils";
import reducer from "./reducer";
import thunk from "redux-thunk";

let middlewares = applyMiddleware(thunk);

if (isDevEnv()) {
    middlewares = composeWithDevTools(middlewares);
}

export const store = createStore(reducer, middlewares);
