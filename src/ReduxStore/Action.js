export const Login = () => {
  return {
    type: "LOGIN",
    payload: true,
  };
};

export const Logout = () => {
  return {
    typeof: "LOGOUT",
    payload: false,
  };
};
