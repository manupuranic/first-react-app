import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
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
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
