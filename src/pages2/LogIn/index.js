import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";

import logo from "./../../logo.svg";
import "./styles.css";


function Login() {
  const store = useStore();
  const dispatch = useDispatch()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => dispatch({ type: "auth/LOGIN", user:"joao", password:"joao" })}>Login </p>
        <p onClick={() => dispatch({ type: "auth/LOGOUT"})}>Logout </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Login;
