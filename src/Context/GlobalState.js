import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//initial state
const initialState = {
    transactions: [],
    blog: {},
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

    async function getBlog(id) {
        try {
            const res = await axios.get('/api/transactions/blog/600d0c7be4337d6f5c57cc71')

            dispatch({
                type: 'GET_BLOG',
                payload: res.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/transactions/${id}`)

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        } catch(err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log("POST ATTEMPTED")
        try {
            const res = await axios.post('/api/transactions', transaction, config);
            console.log("POST SUCCESSFUL")
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            })
        } catch (err) {
            console.log("POST FAILED")
            console.log(err.response);
            console.log(err.request);
            console.log(err.message);
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        blog: state.blog,
        error: state.error,
        laoding: state.loading,
        getTransactions,
        getBlog,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}