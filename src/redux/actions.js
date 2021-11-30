import { createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('contacts/add');
export const delContact = createAction('contacts/del');
export const contactsFilter = createAction('filter/set');