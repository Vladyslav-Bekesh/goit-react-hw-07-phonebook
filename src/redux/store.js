import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer, isLoadingReducer } from './slicers';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    isLoading: isLoadingReducer,
  },
});