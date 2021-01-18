import React, { createContext, useReducer } from 'react';
import { AllTransections, Transection } from '../types/Types';
import AppReducer from './AppReducer';

// Initial state
const initialState: AllTransections = {
  transactions: []
}

type contextProps = {
  transactions: Transection[]
  addTransaction: (newTransaction: Transection) => void,
  deleteTransaction: (id: number) => void
};
// Create context
export const GlobalContext = createContext<Partial<contextProps>>({});

// Provider component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: {id}
    });
  }

  function addTransaction(transaction: Transection) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {transaction}
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}