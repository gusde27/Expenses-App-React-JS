import './ExpensesItem.css'
import ExpensesDate from './ExpensesDate';

function ExpensesItem(props) {

  return (
    <div className= "expenseItem">
      <ExpensesDate date={ props.date }/>
      <div className= "expenseItemDescription">
        <h2>{ props.title }</h2>
      </div>
      <div className= "expenseItemPrice">
        Rp.{ props.amount }
      </div>
    </div>

  );
}

export default ExpensesItem;
