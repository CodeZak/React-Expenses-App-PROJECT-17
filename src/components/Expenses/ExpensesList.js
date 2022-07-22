import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found!</h2>;
    }

    function removeItemHandler(items) {
        props.removeItemHandler(items);
    }

    return (
        <ul className="expenses-list">
            {props.items.map((item) => {
                return (
                    <ExpenseItem
                        removeItemHandler={removeItemHandler}
                        itemsRe={props.itemsRe}
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                );
            })}
        </ul>
    );
}

export default ExpensesList;

/* 
{filteredExpenses.length === 0 && (
    
)}
{filteredExpenses.length > 0 &&
    filteredExpenses.map((item) => {
        return (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        );
    })} */
