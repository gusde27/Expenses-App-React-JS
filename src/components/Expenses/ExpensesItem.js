import React from 'react';
import './ExpensesItem.css'
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card';

const ExpensesItem = (props) => {

  return (
    <Card className= "expenseItem">
      <ExpensesDate date={ props.date }/>
      <div className= "expenseItemDescription">
        <h2>{ props.title }</h2>
      </div>
      <div className= "expenseItemPrice">
        Rp.{ props.amount }
      </div>
    </Card>

  );
}

export default ExpensesItem;
