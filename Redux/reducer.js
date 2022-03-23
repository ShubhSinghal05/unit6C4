import {
    SORT_DATA,
    GET_CLICKED_PRODUCT_FAILURE,
    GET_CLICKED_PRODUCT_REQ,
    GET_CLICKED_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_REQ,
    GET_PRODUCT_SUCCESS,
  } from "./actionTypes";
  
  const initState = {
    products: [],
    sortData: [],
    isLoading: false,
    isError: false,
  };
  
  export const Reducer = (state=initState,{type,payload}) => {
    // add the switch statement for different actions
    switch (type) {
      case GET_PRODUCT_REQ:
        return {
          ...state,
          isLoading: true,
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: [...payload],
          sortData: [...payload],
          isError: false,
        };
      case GET_PRODUCT_FAILURE:
        return {
          ...state,
          isLoading: false,
          data: [],
          isError: true,
        };
  
      case SORT_DATA:
        return {
          ...state,
          sortData: state.data.filter((el) => {
            let price = el.price.trim().split("|");
            return price.indexOf(payload) != -1;
          }),
        };
  
      case GET_CLICKED_PRODUCT_REQ:
        return {
          ...state,
          isLoading: true,
        };
      case GET_CLICKED_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          selectedData: payload,
          isError: false,
        };
      case GET_CLICKED_PRODUCT_FAILURE:
        return {
          ...state,
          isLoading: false,
          selectedData: {},
          isError: true,
        };
      default:
        return state;
    }
  };