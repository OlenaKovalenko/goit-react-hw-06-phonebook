import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilter: {
            reducer(state, action) {
                state = action.payload;
            }
        }
    }
})