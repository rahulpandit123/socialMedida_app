import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Login, Logout } from "./ReduxStore/Action";
import store from "./ReduxStore/store";
// import ReactDOM from "react-dom";
import SignUpContainer from "./AuthPage/SignupContainer";
// import Login from "./AuthPage/Login";
import LoginPage from "./AuthPage/LoginPage";
import Welcome from "./Welcome";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import SignupPage from "./AuthPage/SignupPage";
// import Header from "./Router/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.loginState);
  return (
    <Router>
      {/* <Header /> */}
      <div style={{ backgroundColor: "white", width: "100%", height: "5rem" }}>
        <div className='header1 fluid-container'>
          {/* <NavLink to='/' className='home1'>
            Home
          </NavLink> */}
          <ul className='head'>
            <li className='page'>
              <NavLink
                to='/home'
                // exact
                // style={({ isActive }) => ({
                //   color: isActive ? "#fff" : "#545e6f",
                //   background: isActive ? "#7600dc" : "#f0f0f0",
                // })}
                className='home'>
                Home
              </NavLink>
            </li>
            <li className='page'>
              <NavLink
                to='/login'
                // exact
                // style={({ isActive }) => ({
                //   color: isActive ? "#fff" : "#545e6f",
                //   background: isActive ? "#7600dc" : "#f0f0f0",
                // })}
                className='login_header'>
                Login
              </NavLink>
            </li>
            <li className='page'>
              <NavLink
                to='/signup'
                // exact
                // style={({ isActive }) => ({
                //   color: isActive ? "#fff" : "#545e6f",
                //   background: isActive ? "#7600dc" : "#f0f0f0",
                // })}
                className='signup_header'>
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        {/* <MuiThemeProvider> */}
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/welcome' element={<Welcome />} />

        <Route path='*' element={<NotFound />} />
        {/* </MuiThemeProvider> */}
      </Routes>
    </Router>
  );
}

export default App;
