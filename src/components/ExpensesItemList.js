import ExpensesItem from "./ExpensesItem";

function ExpensesItemList(props) {
  const expenses = props.expenses;

  console.log(expenses);

  return (
    <div>
        <ExpensesItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpensesItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpensesItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpensesItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  );
}

export default ExpensesItemList;
