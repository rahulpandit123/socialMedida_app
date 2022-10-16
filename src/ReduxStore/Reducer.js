import action from "./Action";

const initialState = false;

const loginState = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = true);
    case "LOGOUT":
      return (state = false);

    default:
      return state;
  }
};

export default loginState;
