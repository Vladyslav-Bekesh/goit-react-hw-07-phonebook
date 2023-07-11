import React from 'react';
import { deleteContact } from '../redux/slicers/contactSlicer';
import { useDispatch } from 'react-redux';

function ContactsList({ contacts }) {
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(deleteContact(id));
  };

  return contacts.map(({ name, id, number }) => {
    return (
      <li key={id}>
        <span>
          {name}: {number}
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
