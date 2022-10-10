
import Form from "./components/form/Form";
import Todos from "./components/todos/Todos";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  return (
    <div className="wrapper ">
      <br />
      <br />
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form />
      <Todos />
      {todos.length > 0 && (
        <button
          className="btn btn-danger btn-md delete-all my-2"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
