import { createSlice } from '@reduxjs/toolkit';

const initialState = { isLoading: false };

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    loadingStatus(state) {
      return !state.isLoading;
    },
  },
});

export const { loadingStatus } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;
