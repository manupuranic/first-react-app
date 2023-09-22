import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
