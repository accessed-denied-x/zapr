/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false.valueOf,
                transactions: action.payload
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}