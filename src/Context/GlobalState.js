import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//creating context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    async function getTransactions() {
        try {
            const res = await axios.get('/api/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERR',
                payload: err.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        error: state.error,
        laoding: state.loading,
        getTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}