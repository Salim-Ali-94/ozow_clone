import { createSlice } from "@reduxjs/toolkit";


const ozowSlice = createSlice({

    name: "flag",
    initialState: { ozow: false },

    reducers: {
    
        toggleState: (state, action) => {

            state.ozow = action.payload;

        }

    }

});

export const { toggleState } = ozowSlice.actions;
export default ozowSlice.reducer;
