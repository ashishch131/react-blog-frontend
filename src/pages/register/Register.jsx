import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    try {
      const res = await axios.post("/auth/register", { username, email, password });
     res.data && window.location.replace("/login")
    } catch (error) {
      setErr(true);
    }
  
  };

  return (
    <div className="register">
    <div className="formWrapper">
        <h1 className="registerText">Register</h1>
              <form action="" className="registerForm" onSubmit={handleSubmit}>
              <label className="labelText">Username</label>
          <input type="text" className="loginInput" placeholder="Enter your username" autoFocus="true"
            onChange={e => setUsername(e.target.value)} />
          
            <label className="labelText">Email</label>
          <input type="email" className="loginInput" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
          
            <label className="labelText">Password</label>
          <input type="password" className="loginInput" placeholder="Enter your password" onChange={e => setPassword(e.target.value)}/>
          
          <button className="rgstrBtn" type="submit">Register</button>
          <Link className="lgnLink" to={"/login"}>
            <button className="lgnBtn">Login</button>
          </Link>
          {err && 
          <span style={{marginTop: "20px", color: "tomato", textAlign: 'center'}}>Something went wrong!</span>
          }
        </form>
      
</div>
</div>
  )
}

export default Register