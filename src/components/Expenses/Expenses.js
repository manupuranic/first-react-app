import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.items;
  const [selectedYear, setSelectedYear] = useState("2020");
  const changeFilterHandler = (year) => {
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={changeFilterHandler}
      />
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
    </Card>
  );
};

export default Expenses;
