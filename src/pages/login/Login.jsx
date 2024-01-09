import { Link } from "react-router-dom";
import "./login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFeching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", { email: emailRef.current.value, password: passwordRef.current.value });
      console.log(res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/")
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }

  return (
    <div className="login">
          <div className="formWrapper">
              <h1 className="loginText">Login</h1>
              <form action="" className="loginForm" onSubmit={handleSubmit}>
                  <label className="labelText">Email</label>
                  <input type="email" className="loginInput" placeholder="Enter your email" autoFocus={true} ref={emailRef} />
                  <label className="labelText">Password</label>
                  <input type="password" className="loginInput" placeholder="Enter your password" ref={passwordRef} />
          <button className="loginBtn" type="submit">Login</button>
          <Link className="rgstrLink" to={"/register"}>
                  <button className="registerBtn">Register</button>
          </Link>
              </form>
            
      </div>
    </div>
  );
};

export default Login;
