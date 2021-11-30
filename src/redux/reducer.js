import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, delContact,  contactsFilter } from './actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactReducer = createReducer(initialContacts, {
  [addNewContact]: (state, { payload }) => {
    const existContact = state.some(
      el => el.name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (existContact) {
      alert(`this contact already exists`);
      return state;
    } else {
      return [...state, payload];
    }
  },
  [delContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const setFilterReducer = createReducer("", {
    [contactsFilter]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts: contactReducer,
contactsFilter: setFilterReducer,
});
export default rootReducer;