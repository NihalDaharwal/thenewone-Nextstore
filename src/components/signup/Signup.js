import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axiosinstance from "../../api/Axiosinstance";
import './Signup.css'
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, mobNumber } = user;
    const res = await Axiosinstance.post("/signUp", {
      name,
      email,
      password,
      mobNumber,
    });

    if (!res || res.status !== 200) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration Successfull");
      console.log(" Registration Successfull");
      navigate("/login");
    }
  };

  //
  const handleChangeInput = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h6 className="signupheading">Signup</h6>
        <label htmlFor="name">
          {" "}
          <span> Name</span>
          <span>
            {" "}
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              id="name"
              value={user.name}
              onChange={handleChangeInput}
        
              required
            />
          </span>
        </label>
        <br />
        {/*  */}
        <label htmlFor="mail">
          {" "}
          <span>Email</span>
          <span>
            {" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter mail"
              value={user.email}
              onChange={handleChangeInput}
              required
            />
          </span>
        </label>
        <br />
        {/*  */}
        <label htmlFor="password">
          {" "}
          <span>Password</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleChangeInput}
            required
          />
        </label>
        <br />
        <label htmlFor="number">
          {" "}
          <span>Number</span>
          <input
            type="text"
            name="mobNumber"
            id="mobNumber"
            required
            maxLength="10"
            pattern="\d{10}"
            placeholder="Enter number"
            value={user.mobNumber}
            onChange={handleChangeInput}
          />
        </label>
        <br />
        <span>
          <button className="submit">submit</button>
        </span>
        <br />
        <p>
          <Link to="/login"> Already have an account?</Link>.
        </p>
      </form>
    </div>
  );
};

export default Signup;
