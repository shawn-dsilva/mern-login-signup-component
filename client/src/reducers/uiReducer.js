import {
  BUTTON_CLICKED,
  BUTTON_RESET
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

      case BUTTON_RESET:
      return {
        ...state,
        button: true
      };

    default:
        return state;
  }
}