import Form from "./components/form/Form";
import Todos from "./components/todos/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";
import { useState } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const [editForm, seteditform] = useState(false);
  const [editTodo, setEdittodo] = useState("");

  const handleEdit = (todo) => {
    seteditform(true);
    setEdittodo(todo);
  };

  const cancelUpdate = () => {
    seteditform(false);
  };
  return (
    <div className="wrapper">
      <h1 className="text-center text-danger">TODO-APP USING REACT-REDUX</h1>
      <Form
        editForm={editForm}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todos handleEdit={handleEdit} editForm={editForm} />
      {todos.length > 0 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
