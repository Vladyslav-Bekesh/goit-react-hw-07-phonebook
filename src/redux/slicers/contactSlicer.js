import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operations';

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

    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId.id
      );
    },
  },
});

export const contactReducer = contactsSlice.reducer;
