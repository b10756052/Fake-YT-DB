import React from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../services/auth.services";

const Nav = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    authServices.logout();
    alert("登出成功！即將導向至首頁");
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Fake Youtube
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {currentUser && (
              <li class="nav-item">
                <a class="nav-link" href="/collection">
                  Collection
                </a>
              </li>
            )}
            {currentUser && (
              <li class="nav-item">
                <a onClick={handleLogout} class="nav-link" href="#">
                  Logout
                </a>
              </li>
            )}
            {!currentUser && (
              <li class="nav-item">
                <a class="nav-link" href="/register">
                  Register
                </a>
              </li>
            )}
            {!currentUser && (
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
