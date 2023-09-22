import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  // const changeTitleHandler = () => {
  //   setTitle("Updated");
  //   console.log(title);
  // };

  // const incrementAmount = () => {
  //   setAmount(+amount + 100);
  // };

  // const deleteHandler = () => {
  //   console.log("clicked Delete!!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
    </Card>
  );
};

export default ExpenseItem;
