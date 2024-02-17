import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registrationReducer } from 'shared/reducers';

const rootReducer = combineReducers({

  registrationReducer,

});

export const store = configureStore({
  reducer: rootReducer,
});
