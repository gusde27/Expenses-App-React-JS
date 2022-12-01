import React from "react";
import "./NewExpenses.css";
import FormExpenses from "./FormExpenses";

const NewExpenses = (props) => {

    const saveExpenseDataHandler = () => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);
        props.onAddExpense(expenseData);
    }


    return (
        <div className="new-expense">
            <FormExpenses onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpenses;

