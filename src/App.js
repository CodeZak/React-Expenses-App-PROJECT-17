import React, { useEffect, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expensesObj = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2022, 5, 12),
        },
    ];

    const [expenses, setExprenses] = useState(expensesObj);

    const addExpenseHandler = (expense) => {
        setExprenses((prev) => {
            return [expense, ...prev];
        });
    };
    useEffect(()=> {
            
    })

    function removeItemHandler(itemsRe) {
        setExprenses(itemsRe);
        }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses
                items={expenses}
                removeItemHandler={removeItemHandler}
            />
        </div>
    );
};

export default App;
