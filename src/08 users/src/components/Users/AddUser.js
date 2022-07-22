import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter age higher than 1",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    setEnteredName("");
    setEnteredAge("");
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const okayClickHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkayClick={okayClickHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={usernameChangeHandler}
          ></input>

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>

          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
