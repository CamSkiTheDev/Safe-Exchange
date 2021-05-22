import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignupForm() {
  const { signup, currentUser } = useAuth();
  const initialFormData = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) return alert("Please enter your email address.");

    if (!formData.password || !formData.confirmPassword)
      return alert("Please enter and confirm your password");

    if (formData.password !== formData.confirmPassword)
      return alert("Your passwords don't match");

    try {
      await signup(formData.email, formData.password);
    } catch (error) {
      console.log(error);
      alert("Unable to create new user.");
    }
  };

  useEffect(() => console.log(currentUser), [currentUser]);

  return (
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
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <Link to="/login">Already have an account?</Link>
      <br />
      <button className="button is-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
}
