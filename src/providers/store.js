import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import screenReducer from "./reducers/screenReducer";


export const globalStore = configureStore({

    reducer: {

        reducer_user: userReducer,
        reducer_screen: screenReducer

    }

});
