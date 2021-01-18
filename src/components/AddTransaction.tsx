import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transection } from '../types/Types';

export const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const newTransaction : Transection = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount
    }

    addTransaction && addTransaction(newTransaction);
    setDescription('');
    setAmount('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn income-btn">Add Transection</button>
        {/* {amount >= 0 ? (
        ) : (<button className="btn expense-btn">Add expense</button>)
        } */}
        {/* <button className="btn income-btn">Add transaction</button>
        <button className="btn expense-btn">Add transaction</button> */}
      </form>
    </>
  )
}
