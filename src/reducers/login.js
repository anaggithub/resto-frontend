import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';
import { setToken, getToken, deleteToken } from "../helpers/login"

const initialState = {
    token: getToken() || "",
    isAuthenticated: null,
    isAdmin: false
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            setToken(action.payload.data.token)
            console.log(action.payload)
            return {
                ...state,
                token: action.payload.data.token,
                isAuthenticated: true,
                isAdmin: action.payload.data.role === 1 ? true : false
            };
        case LOGIN_FAIL:
            deleteToken()
            return {
                ...state,
                token: "",
                isAdmin: false,
                isAuthenticated: false,
            };
        default:
            return state;
    }
}

export default login
