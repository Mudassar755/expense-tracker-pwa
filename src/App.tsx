import React,{useEffect} from 'react';
import logo from './logo.svg';
import firebase from './firebase';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import axios from 'axios';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {

  useEffect(() => {
  
    const sendNotification = async () => {
      const messaging = firebase.messaging();
      // messaging.requestPermission()
      const token = await messaging.getToken();
      const response = await axios.post(
        'https://fcm.googleapis.com/fcm/send',
        {
          notification: {
            title: "Expense Tracing App",
            body: "Time To Check Expense",
            click_action: "",
            icon: 'https://www.worldofmobileapps.co/wp-content/uploads/2017/10/512x512-1.png',
          },
          "to": token
        },
        { headers: { 'Content-Type': 'application/json', 'Authorization': 'key=AAAA09er3QY:APA91bGMMuBz4eAshXKBycum7VvjKhTL4p4NDqyRjwxb8OD9fIB4gVFZFHBtdw1305El7qR9_1_tcFT92Rz9MXCE8xF-IQD7Q196hLch70Ov_3QZySBGjvsOOkAaPF8dRVJ6MQ2SvVkl' } }
      );
      console.log('Response: ', response);
    }
    sendNotification()
  }, []);

  return (
    <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
  </GlobalProvider>
  );
}

export default App;
