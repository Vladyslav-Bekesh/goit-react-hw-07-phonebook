import React from 'react';
import { deleteContact } from '../redux/operations';
import { useDispatch } from 'react-redux';

function ContactsList({ contacts }) {
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(deleteContact(id));
  };

  return contacts.map(({ name, id, phone }) => {
    return (
      <li key={id}>
        <span>
          {name}: {phone}
        </span>
        <button
          type="button"
          onClick={() => {
            handleClick(id);
          }}
        >
          delete
        </button>
      </li>
    );
  });
}
export default ContactsList;
