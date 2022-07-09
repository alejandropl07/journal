import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm password"
        />
        <button type="submit" className="btn btn-primary btn-block  mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
