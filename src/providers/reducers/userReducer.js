import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as constants from "../../utility/constants";
import { DB_ENDPOINT } from "@env";


const initialState = {

    user: constants.user,
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,

};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {

    try {

        const person = await AsyncStorage.getItem("user");

        if (person !== null) {

            return JSON.parse(person);

        } else {

            const human = constants.user;
            await AsyncStorage.setItem("user", JSON.stringify(human));
            axios.post(DB_ENDPOINT + "storeUser", human).then(response => console.log("ADDED USER")).catch(err => console.log("Error:", err));
            return human;

        }

    } catch (error) {

        console.log("Error:", error);
        throw error;

    }

});

const userSlice = createSlice({

    name: "person",
    initialState,

    reducers: {
    
        updateBalance: (state, action) => {

            state.user.balance = action.payload;

        },

        storeTransaction: (state, action) => {

            state.user.transactions.unshift(action.payload);

        },

        addStock: (state, action) => {

            state.user.portfolio.unshift(action.payload);

        },

        removeStock: (state, action) => {

            state.user.portfolio = state.user.portfolio.filter(stock => stock.ticker !== action.payload);

        },

        updateShares: (state, action) => {

            // const { ticker, shares } = action.payload;
            // let company = state.user.portfolio.find(company => company.ticker === ticker);
            let company = state.user.portfolio.find(company => company.ticker === action.payload.ticker);
            // company.shares = shares;
            company.shares = action.payload.shares;

        }

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

export const { updateBalance, storeTransaction, addStock, removeStock, updateShares } = userSlice.actions;
export default userSlice.reducer;
