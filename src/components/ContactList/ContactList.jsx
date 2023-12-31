import { deleteContact } from '../../redux/contactSlice';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';

const ContactList = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <li key={id} className={css.info}>
        {name}: {number}
      </li>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.btnContactDelete}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};
export default ContactList;
