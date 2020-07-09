import axios from 'axios';
import { ITEMS_GET_START, ITEMS_GET_SUCCESS, ITEMS_GET_FAIL } from './types';
//import itemsMock from "../services/items";

export const getItems = () => {
    return (dispatch) => {
        let url = "http://restohaditaheroku.herokuapp.com/products"
        let headers = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        };

        dispatch({ type: ITEMS_GET_START });

        axios
            .get(url, headers)
            .then(res => {
                console.log("lala")
                dispatch({
                    type: ITEMS_GET_SUCCESS,
                    payload: res
                });
            })
            .catch(e => {
                dispatch({
                    type: ITEMS_GET_FAIL
                });
            })
    }
}

// const items = () => {
//     //console.log(process.env.REACT_APP_MOCK, typeof process.env.REACT_APP_MOCK)
//     return process.env.REACT_APP_MOCK === "true" ? itemsMock : getItems();
// };
