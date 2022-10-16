export const Login = () => {
  return {
    type: "LOGIN",
    payload: true,
  };
};

export const Logout = () => {
  return {
    type: "LOGOUT",
    payload: false,
  };
};

export const saveToken = (token) => {
  console.log("Token value in action ->>", token);
  return {
    type: "SaveToken",
    payload: token,
  };
};
