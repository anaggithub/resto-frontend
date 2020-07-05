import Axios from "axios"
import productsMock from './mock.json';

const getProducts = async () => {
    let url = "http://restohaditaheroku.herokuapp.com/products"
    let headers = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    };
    const { data } = await Axios.get(url, headers)
    return data
    // console.log(data)
}

const products = () => {
    //console.log(process.env.REACT_APP_MOCK, typeof process.env.REACT_APP_MOCK)
    return process.env.REACT_APP_MOCK === "true" ? productsMock : getProducts();
};

export default products;