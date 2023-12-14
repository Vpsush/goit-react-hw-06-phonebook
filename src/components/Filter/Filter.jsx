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
          value={filter}
          onChange={e => dispatch(filterContact(e.currentTarget.value))}
        />
      </label>
    </form>
  );
};

export default Filter;
