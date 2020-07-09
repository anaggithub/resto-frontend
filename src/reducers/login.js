import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAIL } from '../actions/types';
import { setToken, getToken, deleteToken } from "../helpers/login"

const initialState = {
    token: getToken() || "",
    isAuthenticated: null,
    isAdmin: null,
    isLoading: false
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            setToken(action.payload.data.token)
            return {
                ...state,
                token: action.payload.data.token,
                isAuthenticated: true,
                isAdmin: action.payload.data.role === 1 ? true : false,
                isLoading: false
            };
        case LOGIN_FAIL:
            deleteToken()
            return {
                ...state,
                token: "",
                isAuthenticated: false,
                isAdmin: false,
                isLoading: false
            };
        default:
            return state;
    }
}

export default login
