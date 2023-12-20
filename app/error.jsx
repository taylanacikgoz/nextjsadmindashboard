"use client";
import React from "react";
import styles from "./error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1>Wrong Credentials</h1>
      <span>Go back to login page</span>
    </div>
  );
};

export default ErrorPage;
