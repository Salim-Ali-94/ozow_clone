import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import screenReducer from "./reducers/screenReducer";
import ozowReducer from "./reducers/ozowReducer";


export const globalStore = configureStore({

    reducer: {

        reducer_user: userReducer,
        reducer_screen: screenReducer,
        reducer_ozow: ozowReducer

    }

});
