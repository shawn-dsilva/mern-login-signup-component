import {
  BUTTON_CLICKED
} from "./../actions/types";

const initialState = {
  button: true
};

export default function (state = initialState, action ) {
  switch (action.type) {
    case BUTTON_CLICKED:
      return {
        ...state,
        button: false
      };

    default:
        return state;
  }
}