import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    console.log(name, age);
    setUserList((previusValue) => [
      ...previusValue,
      { name, age, id: Math.random() },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
