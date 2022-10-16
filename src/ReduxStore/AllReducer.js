import { combineReducers } from "redux";
import Reduder from "./Reducer";
import TokenReducer from "./TokenReducer";
import loginState from "./Reducer";
import saveTokenRedux from "./TokenReducer";

const rootReducer = combineReducers({ loginState, saveTokenRedux });

export default rootReducer;
