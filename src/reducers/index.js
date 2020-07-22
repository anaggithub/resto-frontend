import { combineReducers } from "redux";
import loginReducer from "./login"
import itemsReducer from "./items"
import themesReducer from "./themes"


const reducers = combineReducers({
  login: loginReducer,
  items: itemsReducer,
  themes: themesReducer
});

export default reducers;

