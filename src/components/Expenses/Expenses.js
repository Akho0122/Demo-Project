import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className={"expenses"}>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ? <p>No Expenses Found</p> : 
      filteredExpenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </Card>
  );
};

export default Expenses;
