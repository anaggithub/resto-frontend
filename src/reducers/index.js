import { combineReducers } from "redux";
import loginReducer from "./login"
import itemsReducer from "./items"

const reducers = combineReducers({
  login: loginReducer,
  items: itemsReducer
});

export default reducers;
