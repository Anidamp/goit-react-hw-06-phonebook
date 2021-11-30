import s from './Filter.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsFilter } from '../../redux/actions';

export default function Filter() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
        setFilter(e.target.value);
        dispatch( contactsFilter(e.target.value));
    };
  return (
    <label>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}