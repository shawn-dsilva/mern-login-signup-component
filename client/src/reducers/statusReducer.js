import { GET_STATUS, CLEAR_STATUS} from '../actions/types';

const initialState = {
  statusMsg: {},
  respCode: null,
  id: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_STATUS:
      return {
        statusMsg: action.payload.msg,
        respCode: action.payload.status,
        id: action.payload.id
      }

    case CLEAR_STATUS:
      return {
        statusMsg: {},
        respCode: null,
        id: null
      };

    default:
      return state;
  }

}