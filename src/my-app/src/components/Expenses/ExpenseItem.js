import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("Updated state");
  // let title = props.title;
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

// class ExpenseItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "Some value" };
//   }

//   clickHandler() {
//     this.setState({ title: "Updated" });
//   }

//   render() {
//     return (
//       <Card className="expense-item">
//         <ExpenseDate date={this.props.date}></ExpenseDate>
//         <div className="expense-item__description">
//           <h2>{this.state.title}</h2>
//           <div className="expense-item__price">{this.props.amount}</div>
//         </div>
//         <button onClick={this.clickHandler}>Click me</button>
//       </Card>
//     );
//   }
// }

export default ExpenseItem;
