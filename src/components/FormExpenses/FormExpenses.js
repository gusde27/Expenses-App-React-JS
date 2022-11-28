import React from "react";
import "./FormExpenses.css";

const FormExpenses = () => {

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name="expense_title" type="text" />
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