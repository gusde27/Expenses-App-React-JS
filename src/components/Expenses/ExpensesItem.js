import React, { useState } from 'react';
import './ExpensesItem.css'
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';

const ExpensesItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const updateTitle = () => {
    setTitle('New Title');
    console.log(title);
  }

  return (
    <Card className= "expenseItem">
      <ExpensesDate date={ props.date }/>
      <div className= "expenseItemDescription">
        <h2>{ title }</h2>
      </div>
      <div className= "expenseItemPrice">
        Rp.{ props.amount }
      </div>
      <button onClick={updateTitle}> change title name </button>
    </Card>

  );
}

export default ExpensesItem;
