import { combineReducers } from "redux";
import login from "./login"
import items from "./items"

const reducers = combineReducers({
  login: login,
  items: items
});

export default reducers;
