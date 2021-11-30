import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

export default function App () {

  

 /*  const addNewContact = obj => {
    const { name } =obj;
    if (contacts.some(({ name }) => name ===obj.name)) {
      alert(`Sorry, ${name} is already in contacts list`);
      return;
    }
    return(
      setContacts(prev => [...prev,obj])
    );
  }; */

 /*  const handleDelContact = id => {
    const filteredItem = contacts.filter(contact => contact.id !== id);
    setContacts(filteredItem);
  }; */

 /*  const onChangeFilter = e => {
    setFilter(e.target.value );
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }; */
  return (
      <div className="App">
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>

  );
}



