import "./ExpenseForm.css";
import Card from "../UI/Card";

const ExpenseForm = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <Card className="expense-form">
      <form className="expense-form__form">
        <div className="expense-form__title">
          <label>Expense Title:</label>
          <input
            onChange={changeHandler}
            type="text"
            className="expense-form__title-input"
          />
        </div>
        <div className="expense-form__amount">
          <label>Expense Amount:</label>
          <input
            onChange={changeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="expense-form__date">
          <label>Expense Date:</label>
          <input onChange={changeHandler} type="date" />
        </div>
        <div className="expense-form__btn-div">
          <button type="submit" className="expense-form__btn">
            Add Expense
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
