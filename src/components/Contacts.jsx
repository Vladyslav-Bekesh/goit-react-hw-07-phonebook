import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Title from './Title';
import ContactsList from './ContactsList';
import Filter from './Filter';

import * as selectors from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

function Contacts() {
  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const error = useSelector(selectors.getError);
  const isLoading = useSelector(selectors.getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const makeFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isLoading && <Title title={'Loading'} />}

      {contacts.length === 0 && !error && !isLoading && (
        <Title title="U haven't any friends" />
      )}
      {contacts.length !== 0 && <Filter />}

      {contacts.length !== 0 && filter === '' && (
        <ContactsList contacts={contacts} />
      )}

      {filter !== '' && makeFilteredContacts().length !== 0 && (
        <ContactsList contacts={makeFilteredContacts()} />
      )}

      {filter !== '' && makeFilteredContacts().length === 0 && (
        <Title title="No matches" />
      )}

      {<Title title={error} />}
    </>
  );
}

export default Contacts;
