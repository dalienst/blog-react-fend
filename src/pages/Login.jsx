/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "../style.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = () => {
  // Set the inputs
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // set error message
  const [err, setErr] = useState(null);
  // navigation after logging in
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // action after keying in values
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          required
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="username"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
        {err && <p>{err}</p>}
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
