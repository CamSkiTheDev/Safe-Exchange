import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginForm() {
  const { login, currentUser } = useAuth();
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) return alert("Please enter your email address.");

    if (!formData.password) return alert("Please enter your password");

    try {
      await login(formData.email, formData.password);
    } catch (error) {
      console.log(error);
      alert("Unable to login.");
    }
  };

  useEffect(() => console.log(currentUser), [currentUser]);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
      <Link to="/signup">Don't have an account?</Link>
    </>
  );
}
