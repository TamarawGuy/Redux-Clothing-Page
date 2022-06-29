import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.SET_PRODUCTS) {
    return { ...state, products: action.payload };
  }

  return state;
};

export const selectedProductReducer = (state = {}, action) => {
  if (action.type === ActionTypes.SELECTED_PRODUCTS) {
    return { ...state, ...action.payload };
  }
  return state;
};

export const removeSelectedProduct = (state, action) => {
  if (action.type === ActionTypes.REMOVE_SELECTED_PRODUCTS) {
    return {};
  }
  return state;
};
