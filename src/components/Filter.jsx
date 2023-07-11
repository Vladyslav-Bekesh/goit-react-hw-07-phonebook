import { useDispatch, useSelector } from 'react-redux';
import { handleFilterChange } from '../redux/slicers/filterSlice';

function Filter() {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(handleFilterChange(event.target.value));
  };

  return (
    <>
      {contacts.length > 0 && (
        <label>
          Enter name from contacts
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={filter}
            onChange={handleFilter}
            required
          />
        </label>
      )}
    </>
  );
}

export default Filter;
