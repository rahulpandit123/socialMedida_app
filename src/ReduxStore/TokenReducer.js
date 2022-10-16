import { saveToken } from "./Action";

const initialState = {
  token: "",
};

const saveTokenRedux = (state = initialState, action) => {
  console.log("Token Value in TokenReducer ->>", action.payload);
  switch (action.type) {
    case "SaveToken":
      return { ...state, token: action.payload };

    default:
      return state;
  }
};
export default saveTokenRedux;
