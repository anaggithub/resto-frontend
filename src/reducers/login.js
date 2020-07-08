import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAILURE } from '../actions/types';
import { setToken, getToken, deleteToken } from "../helpers/login"

const initialState = {
    token: getToken() || "",
    isAuthenticated: null,
    isAdmin: null,
    isLoading: false
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
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
        case LOGIN_FAILURE:
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
