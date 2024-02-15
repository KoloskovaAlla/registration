import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { orderReducer } from 'shared/reducers';

const rootReducer = combineReducers({

  orderReducer,

});

export const store = configureStore({
  reducer: rootReducer,
});
