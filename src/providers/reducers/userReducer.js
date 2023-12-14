import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as constants from "../../utility/constants";


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

            // let company = state.user.portfolio.find(company => company.ticker === action.payload.ticker);
            // company.shares = action.payload.shares;
            const { ticker, shares } = action.payload;
            let company = state.user.portfolio.find(company => company.ticker === ticker);
            company.shares = shares;
            
        },

        assignUser: (state, action) => {

            state.user = action.payload;

        }

    }

});

export const { updateBalance, storeTransaction, addStock, removeStock, updateShares, assignUser } = userSlice.actions;
export default userSlice.reducer;
