import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const entryHandler = e => {
    let value = e.target.value;
    setCreds({
      ...creds,
      [e.target.name]: value
    });
    console.log("entryHandler", value, creds);
  };

  // post to backend with creds object, token saved to localstorage for access to protected routes, pushes user to home page
  const HandleSubmit = e => {
    e.preventDefault();
    // axiosWithAuth()
    // .post("???", creds)
    // .then(res => {
    console.log("Login", creds);
    localStorage.setItem("token", "res.data.payload??");
    props.history.push(`/home`);
    // })
    // .catch(err => {
    //     console.log("Login Error", err);
    //     return <h3>Username/Password Incorrect</h3>
    // })
  };

  const toRegister = () => {
    props.history.push("/register");
  };

  return (
    <form onSubmit={HandleSubmit}>
      <h2>Login</h2>
      <div>
        <label>
          {" "}
          Username:
          <input
            type="text"
            name="username"
            onChange={entryHandler}
            value={creds.username}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={entryHandler}
            value={creds.password}
          />
        </label>
      </div>
      <button>Submit</button>
      <div>
        <h4>New to Gigapet?</h4>
        <button onClick={toRegister}>Register</button>
      </div>
    </form>
  );
};

export default Login;
