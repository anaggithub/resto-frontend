import { ITEMS_GET_SUCCESS, ITEMS_GET_FAIL, ITEMS_GET_START } from '../actions/types';

const initialState = {
    items: [],
    isLoading: false
};

const items = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ITEMS_GET_START:
            return {
                ...state,
                isLoading: true
            }
        case ITEMS_GET_SUCCESS:
            return {
                ...state,
                items: action.payload.data,
                isLoading: false
            }
        case ITEMS_GET_FAIL:
            return {
                ...state,
                items: [],
                isLoading: false
            }
        default:
            return state;
    }
}

export default items
