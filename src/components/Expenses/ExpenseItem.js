import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import close from "./close.png";

const ExpenseItem = (props) => {
    let itemsRe = props.itemsRe;

    function removeItem(e) {
        itemsRe = itemsRe.filter((item) => {
            return e.target.id !== item.id;
        });
        props.removeItemHandler(itemsRe)
    }
    
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                    <div className="expense-item__close_btn">
                        <img src={close} id={props.id} onClick={removeItem} />
                    </div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
