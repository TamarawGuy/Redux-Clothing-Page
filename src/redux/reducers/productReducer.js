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
