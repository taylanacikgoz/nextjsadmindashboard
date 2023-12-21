"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";

const LoginForm = () => {
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await authenticate(formData);
    } catch (error) {
      setMessage("Wrong credentials! Please try again!");
    }
  };

  return (
    <form onSubmit={formSubmit} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {message && message}
    </form>
  );
};

export default LoginForm;
