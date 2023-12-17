import ContactForm from './components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Contact } from './components/Contact/Contact';

export default function App() {
  return (
    <div>
      <section>
        <ContactForm />
      </section>
      <section>
        <Filter />
      </section>
      <Contact />
    </div>
  );
}
