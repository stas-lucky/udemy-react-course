import React, { setState, useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const valueChangeHandler = (currentValue) => {
    console.log(currentValue);
    setFilteredYear(currentValue);
  };

  const filteredItems = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onValueChange={valueChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
