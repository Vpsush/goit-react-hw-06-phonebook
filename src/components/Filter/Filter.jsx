import React from 'react';
import css from './Filter.module.css';
import { filterContact } from '../../redux/filterSlice';
import { selectorFilter } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectorFilter);

  return (
    <form className={css.form}>
      <label>
        Filter contacts by name:
        <input
          type="text"
          name="filter"
          required
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </label>
    </form>
  );
};

export default Filter;
