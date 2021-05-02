import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [],
        loading: true,
    },

    reducers: {
        GET_TRANSACTIONS: (state, action) => {
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        },
        DELETE_TRANSACTION: (state, action) => {
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        },
        ADD_TRANSACTION: (state, action) => {
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        },
        TRANSACTION_ERROR: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
    }
})

export const {
    GET_TRANSACTIONS,
    DELETE_TRANSACTION,
    ADD_TRANSACTION,
    TRANSACTION_ERROR
} = transactionSlice.actions;

export default transactionSlice.reducer;