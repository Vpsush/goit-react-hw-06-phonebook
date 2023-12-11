import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
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
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
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
    // toggleCompleted: (state, action) => {},
  },
});

export const { addContacts, deleteContact } = contactSlice.actions;
