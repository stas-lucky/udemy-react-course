import "./ExpenseCreate.css";

const ExpenseCreate = (props) => {
  const addButtonHandler = (event) => {
    if (props.onAddClick) props.onAddClick();
  };

  return (
    <div className="new-expense__actions">
      <button onClick={addButtonHandler}>Add New Expense</button>
    </div>
  );
};

export default ExpenseCreate;
