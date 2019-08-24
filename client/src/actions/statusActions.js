import { GET_STATUS, CLEAR_STATUS } from './types';

// RETURN STATUS
export const returnStatus = (msg, status, id = null) => {
  return {
    type: GET_STATUS,
    payload: { msg, status, id}
  };
};

// CLEAR STATUS
export const clearStatus = () => {
  return {
    type: CLEAR_STATUS
  };
};