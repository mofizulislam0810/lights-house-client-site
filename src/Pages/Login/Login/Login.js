import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { loginUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [loginDate, setLoginDate] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginDate };
    newLoginData[field] = value;
    console.log(field, value, newLoginData);
    setLoginDate(newLoginData);
  };

  const handleLoginUser = (e) => {
    loginUser(loginDate.email, loginDate.password, location, history);
    e.preventDefault();
  };
  return (
    <div className="container my-5 py-5">
      <div className="row my-4">
        <div className="col-md-4 offset-md-4">
          <div className="bg-light mt-4 p-4">
            <form onSubmit={handleLoginUser} className="row g-3">
              <h4>Welcome To Login</h4>
              <div className="col-12 my-3">
                <input
                  type="text"
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
                <button
                  type="submit"
                  className="btn btn-danger float-end w-100"
                >
                  Login
                </button>
              </div>
            </form>
            <hr className="mt-4" />
            <div className="col-12">
              <p className="text-center mb-0">
                Have not account yet?{" "}
                <Link to="/register" className="text-danger">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
