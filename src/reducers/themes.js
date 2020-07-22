import { THEME_SET } from '../actions/types';

const initialState = {
    currentTheme: 'light',
}

const themesReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_SET:
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
export const getTheme = ({ themes }) => themes.currentTheme; 
