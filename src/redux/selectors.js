import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => {
  return state.contacts.contacts;
};
// export const selectorFilter = state => {
//   return state.filter;
// };
const selectFilter = state => {
  return state.filter;
};
export const selectorFilter = createSelector(
  [selectorContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
