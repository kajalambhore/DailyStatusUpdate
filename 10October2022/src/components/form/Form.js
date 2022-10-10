import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoapp/actions";

import "./Form.css";
const Form = () => {
  const dispatch = useDispatch();
  //useDispatch-to dispatch actions
  const [todoValue, setToDoValue] = useState("");
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

  return (
    <form className="form-group custom-form" onSubmit={handleSubmit}>
      <label className="label">Add Your todo-items</label>
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
  );
};

export default Form;
