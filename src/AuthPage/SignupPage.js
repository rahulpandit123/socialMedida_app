import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveToken, Login } from "../ReduxStore/Action";
import axios from "axios";
import "./SignupPage.css";
// import saveTokenRedux from "../ReduxStore/TokenReducer";
const SignupPage = () => {
  const [userName, setuserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupHandler = async (e) => {
    e.preventDefault();
    if (Password === confirmPassword) {
      var params = {
        email: Email,
        password: Password,
        confirmPassword: Password,
      };

      setLoading(true);
      let res = await axios.post(
        "https://rohit-socially.herokuapp.com/auth/signup",
        params
      );

      setLoading(false);

      if (res.status == "201") {
        localStorage.setItem("token", res.data.body[0]);
        navigate("/welcome");
        console.log("signup Token value->> ", res.data.body[0]);
        console.log(res);
        dispatch(Login(true));
        let tk = res.data.body[0];
        if (tk) {
          dispatch(saveToken(res.data.body[0]));
          console.log(
            "SAVING Token to dispatch",
            dispatch(saveToken(res.data.body[0]))
          );
        }
      }
    } else {
      alert("Password and confirm Password do not match");
    }
  };
  return (
    <div className='signupPage'>
      {loading && <h1>I am loading.....</h1>}
      <h1 className='heading_signup'>Signup to join Socially</h1>
      <form onSubmit={signupHandler} className='signupform_inside'>
        <div className='mb-3'>
          <label for='userNameInput' className='from-label'>
            Enter User Name
          </label>
          <input
            type='text'
            className='form-control'
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id='emailHelp' className='form-text'>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label for='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' for='confirmPassword1'>
            Confirm Password
          </label>
          <input
            type='password'
            className='form-control'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <div className='redirect_to_login'>
        <Link to='/login'>Already registered ? So Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;
