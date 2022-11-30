import React from 'react';
import './App.css';
import ExpensesItemList from './components/Expenses/ExpensesItemList';
import NewExpenses from './components/FormExpenses/NewExpenses';

const App = () => {

  const expenses = [
    {
      id: 1,
      date: new Date(1999, 7, 3),
      title: 'Birthday Party',
      amount: 1000000
    },
    {
      id: 2,
      date: new Date(1999, 7, 3),
      title: 'Hotel',
      amount: 400000
    },
    {
      id: 3,
      date: new Date(1999, 7, 3),
      title: 'Tiket',
      amount: 100000
    },
    {
      id: 4,
      date: new Date(1999, 7, 3),
      title: 'Food',
      amount: 500000
    },
  ]

  return (

    <div>
      <NewExpenses/>
      <ExpensesItemList expenses={ expenses }></ExpensesItemList>
    </div>

  );
}

export default App;
