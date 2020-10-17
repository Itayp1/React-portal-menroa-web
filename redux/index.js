import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import InitialState from "./initialState";
import Reducers from "./reducers/adminReducer";
import reduxThunk from "redux-thunk";

export function initializeStore(initialState = InitialState) {
  return createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(reduxThunk)));
}
