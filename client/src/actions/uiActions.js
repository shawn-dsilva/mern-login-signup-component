import {
  BUTTON_CLICKED,
  BUTTON_RESET
} from "./types";

export const buttonClicked = () => (dispatch, getState) => {
  dispatch({type: BUTTON_CLICKED});
};

export const buttonReset = () => (dispatch, getState) => {
  dispatch({type: BUTTON_RESET});
};