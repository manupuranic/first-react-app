import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const changeTitleHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  const incrementAmount = () => {
    setAmount(amount + 100);
  };

  const deleteHandler = () => {
    console.log("clicked Delete!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={amount} location={props.location} />
      <button onClick={changeTitleHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={incrementAmount}>Increment By 100</button>
    </Card>
  );
};

export default ExpenseItem;
