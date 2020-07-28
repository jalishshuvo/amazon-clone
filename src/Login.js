import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  // useHistory for redircting
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stops the refresh
    // do the logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
    // error message
  };

  const register = (event) => {
    event.preventDefault(); //this stops the refresh
    // do the logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1> Sign in</h1>
        <form>
          <h5> E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5> password </h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
          <p>
            By signing-in here, you agree to Adam's Fake Amazon Page Terms &
            Conditions
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
