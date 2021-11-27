import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { registerUser } = useAuth();
  const history = useHistory();
  const [registerData, setRegisterData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    console.log(field, value, newRegisterData);
    setRegisterData(newRegisterData);
  };
  const handleRegisterUser = (e) => {
    if (registerData.password !== registerData.cpassword) {
      alert("Passsword Does not match!");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
    e.preventDefault();
  };
  return (
    <div className="container my-5 py-5">
      <div className="row my-2">
        <div className="col-md-4 offset-md-4">
          <div className="bg-light mt-4 p-4">
            <form onSubmit={handleRegisterUser} className="row g-3">
              <h4>Welcome To Register</h4>
              <div className="col-12 my-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onBlur={handleOnBlur}
                  placeholder="Name"
                />
              </div>
              <div className="col-12 my-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onBlur={handleOnBlur}
                  placeholder="Email"
                />
              </div>
              <div className="col-12 my-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onBlur={handleOnBlur}
                  placeholder="Password"
                />
              </div>
              <div className="col-12 my-3">
                <input
                  type="password"
                  name="cpassword"
                  className="form-control"
                  onBlur={handleOnBlur}
                  placeholder="Retype Password"
                />
              </div>
              <div className="col-12 my-3">
                <button
                  type="submit"
                  className="btn btn-danger float-end w-100"
                >
                  Register
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                Already Register?{" "}
                <Link to="/login" className="text-danger">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
