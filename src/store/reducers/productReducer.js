import { FETCH_PRODUCTS } from "../actions/types";

const initialState = {
  items: [],
  total: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload.products,
        total: action.payload.totalActual
      };
    default:
      return state;
  }
}
