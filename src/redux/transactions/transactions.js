import axios from 'axios';
import { GET_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION, TRANSACTION_ERROR } from './transactionSlice';

const api = 'https://zapr.herokuapp.com/api/transactions';

export async function getTransactions(dispatch) {
    try {
        const res = await axios.get(api);

        dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data.data,
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: err.response.data.error,
        });
    }
}

export 	async function deleteTransaction(dispatch, id) {
    try {
        await axios.delete(`${api}/${id}`);

        dispatch({
            type: DELETE_TRANSACTION,
            payload: id,
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: err.response.data.error,
        });
    }
}

export async function addTransaction(dispatch, transaction) {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log('POST ATTEMPTED');
    try {
        const res = await axios.post(api, transaction, config);

        dispatch({
            type: ADD_TRANSACTION,
            payload: res.data.data,
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: err.response.data.error,
        });
    }
}