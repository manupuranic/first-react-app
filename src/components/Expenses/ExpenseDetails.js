import React from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <div>
        <h2>{props.location}</h2>
      </div>
    </div>
  );
};

export default ExpenseDetails;

// function example(props) {
//   return React.createElement(
//     "div",
//     { className: "expense-item" },
//     React.createElement(
//       ExpenseDate,
//       { date: props.date },
//       React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, "Expense 1"),
//         React.createElement("h1", {}, "Expense 1")
//       ),
//       React.createElement("div", {})
//     )
//   );
// }
