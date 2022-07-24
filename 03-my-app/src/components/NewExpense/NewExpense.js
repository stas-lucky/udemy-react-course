import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseCreate from "./ExpenseCreate";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formState, setFormState] = useState({ state: "new" });

  const saveExpenseDataHandler = (event) => {
    const expenseData = {
      ...event,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    if (props.onAddExpense) props.onAddExpense(expenseData);
    setFormState({ state: "new" });
  };

  const cancelExpenseHandler = (event) => {
    console.log("Cancel clicked");
    setFormState({ state: "new" });
  };

  const onAddClickHandler = () => {
    console.log("Add clicked");
    setFormState({ state: "create" });
  };

  if (formState.state === "new")
    return (
      <div className="new-expense">
        <ExpenseCreate onAddClick={onAddClickHandler}></ExpenseCreate>
      </div>
    );

  // Create view
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
