import "./App.css";
import Alert from "./components/alert/Alert";
import ExpenseForm from "./components/expenseform/ExpenseForm";
import ExpenseList from "./components/expenselist/ExpenseList";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
//if localStorage.getItem('expenses') true the return localstorage item else return empty array.
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState("");

  //single amount
  const [amount, setAmount] = useState("");

  const [alert, setAlert] = useState({ show: false });
  //for edit button
  const [edit, setEdit] = useState(false);
  //edit item
  const [id, setId] = useState(0);

  //setitem to localstorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(charge,amount)
    if (charge !== "" && amount > 0) {
      if (edit) {
        //for replace edited values to same id
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
          //if itemid === id then return existing item and change charge and amount ={ ...item, charge, amount }  else return item
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "Item Edited" });
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount has to be bigger than zero`,
      });
    }
  };

  //clear all items

  const handleAllClearExpenses = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All Items Deleted" });
  };
  //delete item
  const handleDeleteItem = (id) => {
    console.log("delete", `${id}`);
    let tempExpenses = expenses.filter((item) => {
      return item.id !== id;
    });
    // console.log(tempExpenses)
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "Item Deleted" });
  };
  //handleEdit
  const handleEditItem = (id) => {
    // console.log("edit",`${id}`)
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;

    setCharge(charge);
    setAmount(amount);
    setEdit(true); //change submit button text to edit button
    setId(id);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>

      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
          handleAllClearExpenses={handleAllClearExpenses}
        />
      </main>

      <h1>
        Total Spending:
        <span className="total">
          $
          {expenses.reduce((acc, current) => {
            return (acc += parseInt(current.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
