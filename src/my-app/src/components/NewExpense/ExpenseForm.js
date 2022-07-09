import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const emptyState = {
    title: "",
    amount: "",
    date: "",
  };
  const [userInput, setUserInput] = useState({ ...emptyState });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    console.log(expenseDate);
    if (props.onSaveExpenseData) {
      props.onSaveExpenseData(expenseDate);
    }

    setUserInput({ ...emptyState });
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    if (props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
