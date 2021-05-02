import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transactions/transactionSlice';

export default configureStore({
    reducer: {
        transaction: transactionReducer
    },
})