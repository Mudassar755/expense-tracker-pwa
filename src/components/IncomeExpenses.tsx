import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions && transactions.map(transaction => transaction.amount);

  const income = balance && balance
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = balance && (
    balance.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{expense}</p>
        </div>
      </div>
  )
}
