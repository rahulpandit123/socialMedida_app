import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LoginPage.css";
import Signup from "./Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { NavLink } from "react-router-dom";
const LoginPage = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myState = useSelector((state) => state.loginState);

  const handleSubmit = (e) => {
    e.preventDefault();
    var params = { email: emailId, password: password };
    axios
      .post("https://rohit-socially.herokuapp.com/auth/login", params)
      .then((res) => {
        console.log("this is the res: ", res, res.data);
        if (res.status == "201") {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          navigate("/welcome");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Login Data Error", err);
      });
  };
  return (
    //
    //   <div className="login_heading">
    // <h2 className="login_text">Login</h2>
    //   </div>
    //   <div className="email_id_text">

    //   </div>

    //
    <div className='loginpage1'>
      <form
        className='loginpage'
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <h2 className='login_text'>Login</h2>
        <div className='mb-3'>
          <label text='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={emailId}
            onChange={(event) => setEmailId(event.target.value)}
            required
          />
          <div id='emailHelp' className='form-text'>
            Enter a Valid Email Id.
          </div>
        </div>
        <div className='mb-3'>
          <label text='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='d-grid gap-2 col-6 mx-auto mb-5'>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </div>
        <div>
          <a href='#' className='forgetpass'>
            Forgot Password
          </a>
        </div>
        <div>
          <p>
            Create New Account ? <br />
            {/* <NavLink to='/signup'>Signup here</NavLink> */}
            <a href='/signup'>Signup Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
