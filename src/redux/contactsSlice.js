import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    // initialState: {
    //     contacts: [],
    // },
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts = [...state.contacts, action.payload]
                },
            prepare( {name, number} ) {
                return {
                    payload: {
                    name,
                    number,
                    id: nanoid(),
                    } 
                }
            }
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

