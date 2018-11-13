import { PAGING } from "../actions/types";

const initialState = {
  payload: {
    currentPage: 1,
    perPage: 12
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PAGING:
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
}
