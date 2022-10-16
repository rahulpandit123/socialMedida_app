import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
// import RaisedButton from "material-ui/RaisedButton";
// import TextField from "material-ui/TextField";
import TextField from "@material-ui/core/TextField";
import PasswordStr from "./PasswordStr";
import { NavLink } from "react-router-dom";
import "./Signup.css";

const Signup = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange,
}) => {
  return (
    <div className='loginBox'>
      <h1 className='signup_text'>Signup</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name='username'
          helperText='user name'
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
        <br />
        <TextField
          name='email'
          helperText='email'
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <br />
        <TextField
          type={type}
          name='password'
          helperText='password'
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />

        <div className='pwStrRow'>
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />

              <button
                className='pwShowHideBtn'
                label={btnTxt}
                onClick={pwMask}
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}>
                {btnTxt}{" "}
              </button>
            </div>
          )}
        </div>
        <TextField
          type={type}
          name='pwconfirm'
          helperText='confirm password'
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br />
        <div className='d-grid gap-2 col-6 mx-auto mb-5'>
          <button
            className='signUpSubmit btn btn-primary'
            primary='true'
            type='submit'
            label='submit'>
            Submit
          </button>
        </div>
      </form>
      <p>
        Already have an account? <br />
        <NavLink to='/login'>Login in here</NavLink>
      </p>
    </div>
  );
};

export default Signup;
