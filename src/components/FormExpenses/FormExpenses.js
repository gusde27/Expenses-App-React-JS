import React, { useState } from "react";
import "./FormExpenses.css";

const FormExpenses = () => {
    useState();

    const [userInput, setUserInput] = useState({
        enteredTitle = '',
        enteredAmount = '',
        enteredDate = ''
    });

    const titleHandleChange = (event) => {
        //console.log(event.target.value);
        userInput({
            ...userInput,
            enteredTitle = event.target.value;
        });
    }

    const amountHandleChange = (event) => {
        //console.log(event.target.value);
        userInput({
            ...userInput,
            enteredAmount = event.target.value;
        });
    }

    const dateHandleChange = (event) => {
        userInput({
            ...userInput,
            enteredDate = event.target.value;
        });
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name="expense_title" type="text" onChange={ titleHandleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input name="expense_amount" type="number" min="0" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input name="expense_date" type="date" min="2019-01-01" max={ Date().now } />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expenses </button>
            </div>
        </form>
    );

}

export default FormExpenses;