import React from "react";
import { Icon } from "react-icons-kit";
import { useDispatch, useSelector } from "react-redux";
import { trash } from "react-icons-kit/feather/trash.js";
import { edit2 } from "react-icons-kit/feather/edit2.js";
import "./Todos.css";
import { handleCheckbox, removeTodo } from "../../redux/todoapp/actions";
const Todos = ({ handleEdit, editForm }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos);

  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {/* will show chekbox if seteditform is false */}
        {editForm === false && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckbox(todo.id))}
          ></input>
        )}

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
        {/* will show edit and delete when editform is false */}
        {editForm === false && (
          <>
            <span
              onClick={() => handleEdit(todo)}
              className="btn btn-outline-success"
            >
              <Icon icon={edit2} />
            </span>
            <span
              onClick={() => dispatch(removeTodo(todo.id))}
              className="btn btn-outline-danger"
            >
              <Icon icon={trash} />
            </span>
          </>
        )}
      </div>
    </div>
  ));
};

export default Todos;

//to get state we use a hook useSelector that we need to import from react-redux
