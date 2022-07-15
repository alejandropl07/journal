import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "Alejandro",
    email: "aprietoleon97@gmail.com",
    password: "1111",
    password2: "1111",
  });

  const { name, email, password, password2 } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("Name is required");
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("Email is not valid");
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log(
        "Password should be at least 6 characters and match each other"
      );
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (isFormValid()) {
      console.log("Form ok");
    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm password"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block  mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>

        <div className="auth__alert-error mt-5">Error</div>
      </form>
    </>
  );
};

export default RegisterScreen;
