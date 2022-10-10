//dummy data
import { createStore } from "redux";
import { rootreducer } from "./rootReducer";

export const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //we added aboveline to make redux dev tools extension work
  //https://github.com/zalmoxisus/redux-devtools-extension
  //can download that extension also
);
