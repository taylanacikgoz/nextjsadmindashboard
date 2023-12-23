"use client";
import React from "react";
import styles from "./error.module.css";
import "animate.css";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1 className="animate__animated animate__hinge animate__slower">
        Please Try Again...
      </h1>
    </div>
  );
};

export default ErrorPage;
