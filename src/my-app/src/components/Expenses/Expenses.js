import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={filteredItems}></ExpensesChart>
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
