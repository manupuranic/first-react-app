import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 5, 2);
  const expenseTitle = "Car Insurance";
  const expensePrice = 254.23;
  const locationOfExpense = "Bengaluru";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensePrice}</div>
        <h2>{locationOfExpense}</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
