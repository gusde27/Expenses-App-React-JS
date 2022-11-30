import React, { useState } from "react";
import "./FormExpenses.css";

const FormExpenses = () => {
    useState();
    // one input one state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //call in one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle = '',
    //     enteredAmount = '',
    //     enteredDate = ''
    // });

    const titleHandleChange = (event) => {
        //console.log(event.target.value);
        //how to call in one state
        // userInput({
        //     ...userInput,
        //     enteredTitle = event.target.value;
        // });
        //many state
        setEnteredTitle((prevState) => {
            return { ...prevState, enteredTitle = event.target.value };
        });
    }

    const amountHandleChange = (event) => {
        //console.log(event.target.value);
        //how to call in one state
        // userInput({
        //     ...userInput,
        //     enteredAmount = event.target.value;
        // });
        //many state
        setEnteredAmount((prevState) => {
            return { ...prevState, enteredAmount = event.target.value };
        });
    }

    const dateHandleChange = (event) => {
        //how to call in one state
        // userInput({
        //     ...userInput,
        //     enteredDate = event.target.value;
        // });
        //many state
        setEnteredDate((prevState) => {
            return { ...prevState, enteredDate = event.target.value };
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