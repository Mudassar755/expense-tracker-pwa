import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transection } from '../types/Types';
import { TransactionList } from './TransactionList';

type Props = {
  transaction: Transection;
};

export const SingleTransaction = ({transaction}: Props) => {
  console.log("props", transaction)
  const { deleteTransaction } = useContext(GlobalContext);

  const onDeleteTransaction = (id: number) => {
        deleteTransaction && deleteTransaction(id);
      }
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.description} <span>{sign}PKR {Math.abs(transaction.amount)}</span><button onClick={() => onDeleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}