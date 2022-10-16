import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "white", width: "80%", height: "25rem" }}>
      {/* <div className='header1 fluid-container'>
        <NavLink to='/' className='home1'>
          Home
        </NavLink>
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
      </div> */}

      <h1>Welcome to Home Page</h1>
    </div>
  );
};

export default HomePage;
