import React from "react";
import { Icon } from "react-icons-kit";
import { useSelector } from "react-redux";
import { trash } from "react-icons-kit/feather/trash.js";
import { edit2 } from "react-icons-kit/feather/edit2.js";
import removeTodo from '../redux/todoapp/actions'
import "./Todos.css";

const Todos = () => {
  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos);

  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <input
          type="checkbox"
          checked={todo.completed}
          className="checkbox"
        ></input>

        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        <span className="btn btn-outline-success m-2">
          <Icon icon={edit2} />
        </span>
        <span className="btn btn-outline-danger m-2" onClick={()=>dispatchEvent(removeTodo(todo.id))}>
          <Icon icon={trash} />
        </span>
      </div>
    </div>
  ));
};

export default Todos;

//to get state we use a hook useSelector that we need to import from react-redux
