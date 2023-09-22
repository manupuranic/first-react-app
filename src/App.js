import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
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
      date: new Date(2021, 5, 12),
    },
  ]);

  const addNewExpenseHandler = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
  };

  return (
    <div className="main">
      <h2 className="heading">Expenses</h2>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        );
      })}
    </div>
  );
};

export default App;
