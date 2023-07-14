export const getContacts = state => {
  return state.contacts.contacts;
};

export const getIsLoading = state => {
  return state.contacts.isLoading;
};

export const getError = state => {
  return state.contacts.error;
};

export const getFilter = state => {
  return state.filter.filter;
};
