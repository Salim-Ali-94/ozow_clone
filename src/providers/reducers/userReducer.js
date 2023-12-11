import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as constants from "../../utility/constants";


export const fetchUser = createAsyncThunk("user/fetchUser", async () => {

    try {

        const person = await AsyncStorage.getItem("user");

        if (person !== null) {

            return JSON.parse(person);

        } else {

            await AsyncStorage.setItem("user", JSON.stringify(constants.user));
            axios.post(constants.DB_ENDPOINT + "storeUser", constants.user);
            return constants.user;

        }

    } catch (error) {

        console.log("error:", error);
        throw error;

    }

});

const initialState = {

    user: constants.user,
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,

};

const userSlice = createSlice({

    name: "person",
    initialState,

    reducers: {
    
        updateBalance: (state, action) => {
            state.user.balance = action.payload;

        },

    },

    extraReducers: (builder) => {

        builder.addCase(fetchUser.pending, (state) => {

            state.status = "loading";

        }).addCase(fetchUser.fulfilled, (state, action) => {

            state.status = "succeeded";
            state.user = action.payload;

        }).addCase(fetchUser.rejected, (state, action) => {

            state.status = "failed";
            state.error = action.error.message;

        });

    }

});

export const { updateBalance } = userSlice.actions;
export default userSlice.reducer;

















// import { createSlice } from "@reduxjs/toolkit";
// import * as constants from "../../utility/constants";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { DB_ENDPOINT } from "@env";


// const fetchUser = async () => {

//     try {

//         const person = await AsyncStorage.getItem("user");
        
//         if (person !== null) {
        
//             return JSON.parse(person);

//         } else {

//             await AsyncStorage.setItem("user", JSON.stringify(constants.user));
//             axios.post(DB_ENDPOINT + "storeUser", constants.user);
//             return constants.user;

//         }


//     } catch(error) {

//         console.log("error:", error)

//     }

//     // return constants.user.transactions.reverse();
//     return constants.user;

// }

// const initial = { user: fetchUser() };

// export const userSlice = createSlice({

//     name: "person",
//     // initialState: { user: fetchUser() },
//     // initialState: { user: await fetchUser() },

//     // initialState: { user: constants.user },
//     initialState: initial,

//     reducers: {

//         updateBalance: (state, action) => {

//             state.user.balance = action.payload;

//         }

//     }

// });

// export const { updateBalance } = userSlice.actions;
// export default userSlice.reducer;
