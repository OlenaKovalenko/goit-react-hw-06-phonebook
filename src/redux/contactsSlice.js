import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    name,
                    number,
                    id: nanoid(),
                }
            }
        },

        deleteContact: {
            reducer(state, action) {
                const index = state.find(contact => contact.id === action.payload);
                state.splice(index, 1);
            }
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

