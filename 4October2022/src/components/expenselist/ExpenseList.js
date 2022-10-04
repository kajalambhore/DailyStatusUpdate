import React from "react";
import "./ExpenseList.css";
import Item from "../expenseItem/ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({
  expenses,
  handleDeleteItem,
  handleEditItem,
  handleAllClearExpenses,
}) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDeleteItem={handleDeleteItem}
              handleEditItem={handleEditItem}
            />
          );
        })}
      </ul>

      {expenses.length > 0 && (
        <button className="btn text-center" onClick={handleAllClearExpenses}>
          Clear Expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
