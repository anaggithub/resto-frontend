import { THEME_SET } from '../actions/types';
import { setTheme, getTheme } from "../helpers/themes"

const initialState = {
    currentTheme: getTheme() || 'light',
}

const themesReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_SET:
            setTheme(action.payload)
            return {
                ...state,
                currentTheme: action.payload,
            };
        default:
            return state;
    };
};
export default themesReducer;

// Selector
export const getCurrentTheme = ({ themes }) => themes.currentTheme; 
