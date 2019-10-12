import {
  BUTTON_CLICKED,
  BUTTON_RESET,
  IS_LOADING
} from "./types";

export const buttonClicked = () => (dispatch, getState) => {
  dispatch({type: BUTTON_CLICKED});
};

export const buttonReset = () => (dispatch, getState) => {
  dispatch({type: BUTTON_RESET});
};

export const isLoading = () => (dispatch, getState) => {
  dispatch({type: IS_LOADING});
};
