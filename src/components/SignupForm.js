import React, { useState, useEffect } from "react";
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
      <input
        className="form-input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button className="form-button" type="submit">
        Sign Up
      </button>
    </form>
  );
}
