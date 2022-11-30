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
        // setEnteredTitle((prevState) => {
        //     return { ...prevState, enteredTitle = event.target.value };
        // });
        setEnteredTitle(event.target.value);
    }

    const amountHandleChange = (event) => {
        //console.log(event.target.value);
        //how to call in one state
        // userInput({
        //     ...userInput,
        //     enteredAmount = event.target.value;
        // });
        //many state
        // setEnteredAmount((prevState) => {
        //     return { ...prevState, enteredAmount = event.target.value };
        // });
        setEnteredAmount(event.target.value);
    }

    const dateHandleChange = (event) => {
        //how to call in one state
        // userInput({
        //     ...userInput,
        //     enteredDate = event.target.value;
        // });
        //many state
        setEnteredDate(event.target.value);
    }

    //for handling the submit
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={ submitHandler } >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} type="text" onChange={ titleHandleChange} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={ enteredAmount } type="number" min="0" onChange={ amountHandleChange } />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} type="date" min="2019-01-01" max={ Date().now } onChange={ dateHandleChange } />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={ submitHandler }> Add Expenses </button>
            </div>
        </form>
    );

}

export default FormExpenses;