import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/Axiosinstance';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axiosInstance.post("/login", { email, password });
  
      // const token = res.data.token 
      //  if(!token){
        
      //  }
  
      if (!res || res.status !== 200) {
        window.alert("INvalid login");
        console.log("INvalid login");
      } else {
        window.alert(" login Successfull");
        console.log(" login successful");
        localStorage.setItem("email", email);
        localStorage.setItem("token", password);
        navigate("/");
      }
    };
    return (
      <div>
        <form method="post" className="login">
          {/*  */}
          <h6 className="loginheading">Login</h6>
          <label htmlFor="email">
            {" "}
            <span> Email</span>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
              placeholder="Enter mail"
              required
            />
          </label>
          <br />
          {/*  */}
          <label htmlFor="psw">
            {" "}
            <span> Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
              }}
              placeholder="Enter password"
              required
            />
          </label>
          <br />
  
          <span>
            <button className="submit" onClick={handleSubmit}>
              submit
            </button>
          </span>
          <p>
            <Link to="/signup"> Do not have an account? </Link>.
          </p>
        </form>
      </div>
    );
}

export default Login
