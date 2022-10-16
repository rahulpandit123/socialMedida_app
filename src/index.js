import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./ReduxStore/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
// import Header from "./Router/Header";
// import LoginPage from "./AuthPage/LoginPage";
// import Login from "./AuthPage/Login";
// import Signup from "./AuthPage/Signup";
// import SignUpContainer from "./AuthPage/SignupContainer";
// import LoginContainer from "./AuthPage/LoginContainer";
// import Login from "./AuthPage/Login";
// import Welcome from "./Welcome";
// import HomePage from "./HomePage";
// import NotFound from "./NotFound";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
// } from "react-router-dom";
store.subscribe(() => console.log(store.getState()));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <Router>
  <React.StrictMode>
    {/* //     <Routes>
  //       <Route path='/' exact element={<Welcome />} />
  //       <Route path='/login' element={<Login />} />
  //       <Route path='/signup' element={<SignUpContainer />} />
  //       <Route path='/welcome' element={<HomePage />} />

  //       <Route path='*' element={NotFound} />
  //     </Routes> */}
    {/* <Header /> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
