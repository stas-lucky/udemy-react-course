import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // let expensesContent = <p>No expenses found</p>;
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found</h2>;

  return (
    <div className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </div>
  );
};

export default ExpensesList;
