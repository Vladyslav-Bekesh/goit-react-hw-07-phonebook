import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from '../operations';

const contactsSlice = createSlice({
  name: 'contacts',
  
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactReducer = contactsSlice.reducer;
