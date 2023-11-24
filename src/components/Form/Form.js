import React, { useState } from "react";
import style from "./form.module.css";

export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const {name, email, password} = user;

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log(user);
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
