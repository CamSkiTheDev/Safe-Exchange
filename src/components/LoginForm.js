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
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-unlock"></i>
            </span>
          </p>
        </div>
        <Link to="/signup">Don't have an account?</Link>
        <br />
        <button className="button is-primary" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
