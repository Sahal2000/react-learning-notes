import React, { useState } from "react";
import style from './form.module.css'
import { paste } from "@testing-library/user-event/dist/paste";
import { name } from "react-lorem-ipsum";

export default function Form() {

const [name, setName] = useState("")

const [email, setEmail] = useState("")

const [password, setPassword] = useState("")

const handleNameChange = (e) => {
    setName(e.target.value)
}

const handleEmailChange = (e) => {
    setEmail(e.target.value)
}

const handlePasswordChange = (e) => {
    setPassword(e.target.value)
}

const handleSubmit = (e)  => {
    console.log("Submitted");
    console.log(name, email, password)
    e.preventDefault();
}

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
