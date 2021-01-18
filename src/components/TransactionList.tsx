import React, { useContext } from 'react';
import { SingleTransaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';
import { Transection } from '../types/Types';

// type Props = {
//   transactions: Transection[];
//   transection: Transection;
// };

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions && transactions.map((transaction) => (<SingleTransaction transaction={transaction} />))}
      </ul>
    </>
  )
}
