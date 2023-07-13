import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './slicers';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
