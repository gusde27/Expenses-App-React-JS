import React from "react";
import Card from '../UI/Card';

const FormExpenses = () => {

    return (
        <Card className= "expenseItem">
        <div>

            <form>
                <div>
                    <label>Name</label>
                    <input name="name" type="text"/>
                </div>
                <div>
                    <label>Salary</label>
                    <input name="salary" type="number"/>
                </div>
                <div>
                    <label>Date</label>
                    <input name="date" type="date"/>
                </div>
            </form>
            
        </div>

        </Card>
        
    );

}

export default FormExpenses;