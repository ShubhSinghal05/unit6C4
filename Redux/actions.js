// import { LOWTOHIGH,HIGHTOLOW } from "./actionTypes";
import axios from "axios";
import { SORT_DATA,
    GET_CLICKED_PRODUCT_REQ,
    GET_CLICKED_PRODUCT_SUCCESS,
GET_PRODUCT_FAILURE,
GET_PRODUCT_REQ,
GET_PRODUCT_SUCCESS } from "./actionTypes";

import { useDispatch } from "react-redux";

// action for get products request
export const getProductsReq = () => ({
    type:GET_PRODUCT_REQ
});

// action for get products success

export const getProductsSuccess = (payload) => ({
    type:GET_PRODUCT_SUCCESS,
    payload,
});

// action for get products failure

export const getProductsFailure = () => ({
    type:GET_PRODUCT_FAILURE
});

// thunk call to fetch products  list
export const getproductsData = () => {
    return (dispatch)=>{
        dispatch(getProductsReq());
        axios.get("https://movie-fake-server.herokuapp.com/products")
        .then((res)=>{
            dispatch(getProductsSuccess(res.data));
        })
        .catch(()=>{
            dispatch(getProductsFailure());
        })
    }
};

// action object for sort  feature

const sortProducts = (payload) => ({
    type:SORT_DATA,
    payload,
});

export const getClickedProductsRequest=()=>({
    type:GET_CLICKED_PRODUCT_REQ,
})

export const getClickedProductSuccess=(payload)=>{
    return {
        type:GET_CLICKED_PRODUCT_SUCCESS,
        payload,
    }
};

export const getClickedProductFailure=()=>({
    type:GET_PRODUCT_FAILURE
})

export const getClickedProductsData=(id)=>{
    return (dispatch)=>{
        dispatch(getClickedProductsRequest());
        axios
        .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
        .then((res)=>{
            dispatch(getClickedProductSuccess(res.data));
        })
        .catch((err)=>{
            console.log(err);
            dispatch(getClickedProductFailure())
        })
    }
}

export default {sortProducts}
