// import React, { useState, useEffect } from 'react';
// import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import selectorContacts from 'redux/selectors';
// import Filter from 'components/Filter/Filter';

export const Contact = () => {
  const filteredContacts = useSelector(selectorContacts);

  return (
    <div>
      {/* <section>
    <ContactForm handleAddContact={handleAddContact} />
  </section>
  <section>
    <Filter value={filter} onChange={e => setFilter(e.target.value)} />
  </section> */}
      {filteredContacts.map(contact => (
        <ContactList
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          // handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};
