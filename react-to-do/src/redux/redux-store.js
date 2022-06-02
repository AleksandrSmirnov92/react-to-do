import { combineReducers, legacy_createStore } from "redux";
import addMessageReducer from "./addMessageReducer";

let reducers = combineReducers({
  addMessageReducer: addMessageReducer,
});
let local = () => {
  let s = {
     message:[]
  };
  s.message = JSON.parse(localStorage.getItem("todo"));
  return s;
};

let store = legacy_createStore(reducers);

export default store;
