/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../style.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // Set the inputs
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  // set error message
  const [err, setErr] = useState(null);
  // navigation after registering
  const navigate = useNavigate();
  // action after keying in values
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
