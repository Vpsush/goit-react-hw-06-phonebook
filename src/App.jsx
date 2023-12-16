import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Contact } from './components/Contact/Contact';

export default function App() {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <section>
        <ContactForm />
      </section>
      <section>
        <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      </section>
      <Contact />
    </div>
  );
}
