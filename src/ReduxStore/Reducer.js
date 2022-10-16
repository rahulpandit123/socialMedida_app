import action from "./Action";

const initialState = { login: false };

const loginState = (state = initialState, action) => {
  console.log("Token Value in REDUCER ->>", action.payload);
  switch (action.type) {
    case "LOGIN":
      return { login: true };
    case "LOGOUT":
      return { login: false };

    // case "SaveToken":
    // return { tkn: action.payload };
    default:
      return state;
  }
};

export default loginState;
