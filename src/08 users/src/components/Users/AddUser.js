import React from "react";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefaulr();
  };

  return (
    <form onSubmit={AddUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>

      <label htmlFor="age">Username</label>
      <input id="age" type="number"></input>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
