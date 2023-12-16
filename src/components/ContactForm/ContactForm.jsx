import React, { useState, useEffect } from 'react';
import css from './ContactForm.module.css';

import { addContacts } from '../../redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from '../../redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChangeNa = e => {
    setName(e.target.value);
  };

  const handleInputChangeNu = e => {
    setNumber(e.target.value);
  };

  const dispatch = useDispatch();
  const contacts = useSelector(selectorFilter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    // const info = e.currentTarget;
    // const { name, number } = form.elements;
    // const finalContact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };

    // setContacts([...contacts, finalContact]);

    const hasDuplicate = contacts.find(contact => contact.name === name);
    if (hasDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.form}>
          <label>
            <p className={css.name}>Name</p>
            <input
              type="text"
              name="name"
              onChange={handleInputChangeNa}
              required
              pattern={
                "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zAZа-яА-Я]*)*$"
              }
              value={name}
            />
          </label>
          <label>
            <p className={css.name}>Number</p>
            <input
              type="tel"
              name="number"
              onChange={handleInputChangeNu}
              required
              pattern={
                '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
              }
              title="xxx-xx-xx"
              value={number}
            />
          </label>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </div>
      <h2 className={css.title}>Contacts</h2>
      <h3 className={css.title}>Find contacts by number</h3>
    </div>
  );
}
