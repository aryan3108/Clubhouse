import React from "react";
import style from "../style/Welcome.module.css";
import { Link } from "react-router-dom";

export default function welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          We're working hard to get Clubhouse up and running for everyone! We're
          steadily adding folks while we finish up the finishing details to
          ensure nothing goes wrong.
        </p>
        <p>
          Anyone who receives an invite from an existing user is welcome to
          join. We'll text you if you have a friend on the app who can let you
          in if you reserve your username. We are thrilled to have you here and
          absolutely can not wait for you to join us!
        </p>
        <p>Noah, Aryan and the Clubhouse team.</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          style={{ textDecoration: "none" }}
          exact
          to="/invite"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get your Username{" "}
        </Link>
        <Link style={{ textDecoration: "none" }}>
          Have an invite text? Sign in
        </Link>
      </div>
    </div>
  );
}
