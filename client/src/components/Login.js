import React, { useState } from "react";
import authServices from "../services/auth.services";
import { useNavigate } from "react-router-dom";

const Login = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    authServices
      .login(email, password)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        alert("登入成功，即將導向影片收藏頁面");
        setCurrentUser(authServices.getCurrentUser());
        navigate("/collection");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  return (
    <div style={{ padding: "3rem", minHeight: "90.2vh" }} className="col-md-12">
      <div>
        <h1>Login Page</h1>
        <br />
        {message && <div className="alert alert-danger">{message}</div>}

        <br />
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />

        <br />
        <button onClick={handleLogin} className="btn btn-primary">
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
