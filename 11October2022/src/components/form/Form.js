import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../../redux/todoapp/actions";

import "./Form.css";
const Form = ({ editForm, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();
  //useDispatch-to dispatch actions
  const [todoValue, setToDoValue] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completes: false,
    };
    setToDoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completes: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };
  return (
    <>
      {editForm === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <label className="label">Add Your todo-items:</label>
          <div className="input-add-btn">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setToDoValue(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-info btn-md mx-2">
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <label>Update Your todo-items</label>
          <div className="input-add-btn">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
              //  value={todoValue}
              //  onChange={(e) => setToDoValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md">
              UPDATE
            </button>
          </div>
          <button
            type="button"
            onClick={cancelUpdate}
            className="btn btn-primary btn-md back-btn"
          >
            Back
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
