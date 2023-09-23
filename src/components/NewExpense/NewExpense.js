import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const toggleFormHandler = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onHideForm={toggleFormHandler}
          onSaveNewExpense={saveNewExpenseHandler}
        />
      )}
      {!showForm && (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
