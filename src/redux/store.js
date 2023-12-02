import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const store = configureStore({
    contacts: contactsReducer,
    filter: filterReducer,
})