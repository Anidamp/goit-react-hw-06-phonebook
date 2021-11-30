import s from './ContactsList.module.css';
import { useDispatch,  useSelector } from 'react-redux';
import { delContact } from '../../redux/actions';

export default function ContactList() {
  const dispatch = useDispatch();
   const contacts = useSelector(state =>
    state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(state.filter.toLowerCase()),
    ),
  );
   
  return (
    <ul className={s.list}>
      {contacts.map(({id, name, number,}) =>
        <li key={id} className={s.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button  className={s.btn} type='button' onClick={() => dispatch(delContact(id))}>X</button>
        </li>)}
    </ul>
  )
};

