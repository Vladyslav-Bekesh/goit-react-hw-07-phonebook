import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slicers/contactSlicer';
import { filterReducer } from './slicers/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});