import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const [yearInput, setYearInput] = useState(props.selected);
  const valueChangeHandler = (event) => {
    if (props.onValueChange) props.onValueChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={valueChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
