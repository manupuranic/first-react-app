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
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={changeFilterHandler}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
