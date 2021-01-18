import { ActionType, AllTransections } from "../types/Types";

const AppReducer = (state: AllTransections, action: ActionType) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload.transaction, ...state.transactions]
      }
    default:
      return state;
  }
}

export default AppReducer