import { combineReducers, legacy_createStore } from "redux";
import addMessageReducer from "./addMessageReducer"

let reducers = combineReducers({
   addMessageReducer:addMessageReducer
});
let store = legacy_createStore(reducers);

export default store;
