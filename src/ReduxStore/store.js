import { createStore } from "redux";
import rootReducer from "./Reducer";
const store = createStore(rootReducer);

// Need to store Token in Store
export default store;
