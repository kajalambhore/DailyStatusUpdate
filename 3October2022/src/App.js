import "./App.css";
import Alert from "./components/alert/Alert";
import ExpenseForm from "./components/expenseform/ExpenseForm";
import ExpenseList from "./components/expenselist/ExpenseList";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 },
  { id: uuid(), charge: "electric bill", amount: 1000 },
];
console.log(initialExpenses);

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState("");

  //single amount
  const [amount, setAmount] = useState("");

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setCharge(e.target.value);
  };

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>

      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
        />
        <ExpenseList expenses={expenses} />
      </main>

      <h1>
        Total Spending:
        <span className="total">
          $
          {expenses.reduce((acc, current) => {
            return (acc += current.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
