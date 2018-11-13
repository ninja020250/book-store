import { PAGING } from "./types";

export const updatePagination = (currentPage, todoPerpage) => dispatch => {
  dispatch({
    type: PAGING,
    payload: {
      currentPage: currentPage,
      perPage: todoPerpage
    }
  });
};
