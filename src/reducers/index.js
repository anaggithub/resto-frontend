import { combineReducers } from "redux";

const initialState = {
  pet: "",
};

const pet = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PET":
      return action.payload;

    default:
      return state;
  }
};

export const reducer = combineReducers({
  pet,
});

export default reducer;
