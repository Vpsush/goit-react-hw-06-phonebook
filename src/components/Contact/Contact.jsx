import ContactList from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectorFilter } from '../../redux/selectors';

export const Contact = () => {
  const filteredContacts = useSelector(selectorFilter);

  return (
    <div>
      {filteredContacts.map(contact => (
        <ContactList
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};
