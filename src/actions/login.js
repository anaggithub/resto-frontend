import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_START } from './types';

export const login = () => {
    console.log("lala")
    return (dispatch) => {
        let url = "http://restohaditaheroku.herokuapp.com/login"
        let headers = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        };
        dispatch({ type: LOGIN_START });

        axios
            .post(url, {
                username: "admin",
                password: "Ad1023MinN"

            }, headers)
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res
                });
            })
            .catch(e => {
                dispatch({
                    type: LOGIN_FAIL
                });
            })
    }
}

// username: "admin",
// password: "Ad1023MinN"

//acá lo hice con await async
// export const login = () => {

//     return async (dispatch) => {
//         console.log("lala")
//         let url = "http://restohaditaheroku.herokuapp.com/login"
//         let headers = {
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//             }
//         };
//         let res = await axios
//             .post(url, {
//                 username: "pablog",
//                 password: "pedrog1986"
//             }, headers)
//         if (res.status === 200) {
//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 payload: res
//             });
//         }
//         else {
//             dispatch({
//                 type: LOGIN_FAIL
//             });
//         }
//     }
// }