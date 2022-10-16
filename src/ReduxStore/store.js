import { createStore } from "redux";
import { configureStore } from "redux";
import rootReducer from "./AllReducer";
// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Need to store Token in Store
export default store;
