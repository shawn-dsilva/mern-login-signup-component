import {
  BUTTON_CLICKED
} from "./types";

export const buttonClicked = () => (dispatch, getState) => {
  dispatch({type: BUTTON_CLICKED});
};