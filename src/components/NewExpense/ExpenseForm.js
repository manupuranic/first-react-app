import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const enteredTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const enteredAmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const cancelFormHandler = () => {
    props.onHideForm();
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();
    const userInput = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveNewExpense(userInput);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    cancelFormHandler();
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title:</label>
          <input
            onChange={enteredTitleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount:</label>
          <input
            onChange={enteredAmountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date:</label>
          <input onChange={dateChangeHandler} type="date" value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
