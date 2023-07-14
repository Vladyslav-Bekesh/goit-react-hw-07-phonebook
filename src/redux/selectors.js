export const selectContacts = state => {
  return state.contacts.contacts;
};

export const selectIsLoading = state => {
  return state.contacts.isLoading;
};

export const selectError = state => {
  return state.contacts.error;
};

export const selectFilter = state => {
  return state.filter.filter;
};
