import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const changeTitleHandler = () => {
    console.log("Clicked Change Title");
  };

  const deleteHandler = () => {
    console.log("clicked Delete!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={changeTitleHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
