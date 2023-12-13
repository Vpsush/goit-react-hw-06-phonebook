import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      // const index = state.findIndex(task => task.id === action.payload);
      // state.splice(index, 1);
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
  // toggleCompleted: (state, action) => {},
});

export const { addContacts, deleteContact } = contactSlice.actions;
