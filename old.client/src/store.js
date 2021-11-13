import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/authReducer';
import uiReducer from './reducers/uiReducer';
import statusReducer from './reducers/statusReducer';

const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      auth: authReducer,
      status: statusReducer,
      ui: uiReducer
    }
  })

export default store;