import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
    name: 'contacts',
    // initialState: {
    //     contacts: [],
    // },
    initialState: [],
    reducers: {
        addContact: {
            prepare( {name, number} ) {
                return {
                    payload: {
                    name,
                    number,
                    id: nanoid(),
                    } 
                }
            },
            reducer(state, action) {
                state.contacts = [...state.contacts, action.payload]
                },
        },

        deleteContact: {
            reducer(state, action) {
                // const index = state.find(contact => contact.id === action.payload);
                // state.splice(index, 1);

                state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
            }
        }
    }
});



export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

