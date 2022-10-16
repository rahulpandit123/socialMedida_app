import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import "./Signup.css";
import PasswordStr from "./PasswordStr";
import { NavLink } from "react-router-dom";
// import TextField from "material-ui/TextField";
// const { TextField } = require("@material-ui/core");
import TextField from "@material-ui/core/TextField";
// import PasswordStr from "./PasswordStr";

const Login = ({
  history,
  errors,
  onSubmitLogin,
  user,
  onChange,
  type,
  onPwChange,
}) => {
  return (
    // <>
    //   <h1>Login to Social Media app</h1>
    // </>

    <div className='loginBox'>
      <h1 className='Login_text'>Login</h1>
      {errors?.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmitLogin}>
        <TextField
          name='email'
          // variant='outlined'
          label='Enter Email Id'
          value={user?.email || ""}
          margin='10px'
          onChange={onChange}
          errorText={errors?.email || ""}
        />
        <br />
        <TextField
          type='password'
          name='password'
          // variant='outlined'
          margin='10px'
          label='Enter Password'
          value={user?.password || ""}
          onChange={onPwChange}
          errorText={errors?.password || ""}
        />

        <br />
        <button
          className='signupSubmit'
          primary={true}
          type='submit'
          label='Login'>
          Login{" "}
        </button>
      </form>
      {/* <div className='forget_password'>
        <h3>
          <a href='/abc.com'>Forgot Password</a>
        </h3>
      </div>
      <br /> */}
      <p>
        Create New Account ? <br />
        <NavLink to='/signup'>Signup here</NavLink>
      </p>
    </div>
  );
};

export default Login;
