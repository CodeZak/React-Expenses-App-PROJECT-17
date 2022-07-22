import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Chart from "./chart"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
    );

    function removeItemHandler(items) {
        props.removeItemHandler(items)
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <Chart filteredExpenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} removeItemHandler={removeItemHandler} itemsRe={props.items}/>
            </Card>
        </div>
    );
};

export default Expenses;
