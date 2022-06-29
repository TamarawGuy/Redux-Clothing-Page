import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [{ id: 1, title: "Dipesh", category: "programmer" }],
};

export const productReducer = (state = initialState, action) => {
  if (action.type === ActionTypes.SET_PRODUCTS) {
    return state;
  }

  return state;
};
