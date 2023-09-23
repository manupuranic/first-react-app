import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.items;
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedYear
  );

  const changeFilterHandler = (year) => {
    setSelectedYear(year);
  };

  let expenseContent = <p>No Expense found!!</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={changeFilterHandler}
      />
      {expenseContent}
      {filteredExpenses.length === 1 && (
        <p>Only Single Expense here. Please add more..</p>
      )}
    </Card>
  );
};

export default Expenses;
