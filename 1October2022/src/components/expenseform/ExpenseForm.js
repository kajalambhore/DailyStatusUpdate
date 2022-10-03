import React from "react";
import { MdSend } from "react-icons/md";
import "./ExpenseForm.css";
const ExpenseForm = ({ charge, amount, handleCharge, handleAmount }) => {
  return (
    <>
      <form>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">Charge</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="e.g. Rent"
              value={charge}
              onChange={handleCharge}
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="e.g. 100"
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>

        <button type="submit" className="btn">
          Submit <MdSend />
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
