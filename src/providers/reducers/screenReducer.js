import { createSlice } from "@reduxjs/toolkit";


const screenSlice = createSlice({

    name: "page",
    initialState: { screen: "Home",
                    previous: "Home" },

    reducers: {
    
        currentScreen: (state, action) => {

            state.screen = action.payload;

        },

        previousScreen: (state, action) => {

            state.previous = action.payload;

        }

    }

});

export const { currentScreen, previousScreen } = screenSlice.actions;
export default screenSlice.reducer;
