export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (payload) => {
  return {
    // type:'ADD_TODO',
    type: ADD_TODO,
    payload,
  };
};

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};

//action tells redux which actions to do like if we enter any value or submit values

//payload- is a piece of data it can be anything like an array or object or number or string
