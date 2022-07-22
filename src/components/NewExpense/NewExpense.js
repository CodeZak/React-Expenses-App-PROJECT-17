import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    const [display, setDisplay] = useState(true);
    function displayHandler() {
        setDisplay(!display);
    }

    return (
        <div className="new-expense">
            {display && (
                <button className="add-new" onClick={displayHandler}>
                    {" "}
                    Add New Expense
                </button>
            )}

            {!display && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    OnCancel={displayHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
