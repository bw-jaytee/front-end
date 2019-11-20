import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
//import axios from "axios";
 const axios = require("axios");
  const oauth = require("axios-oauth-client");

const Login = props => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  //console.log("Login creds", creds);

  const entryHandler = e => {
    let value = e.target.value;
    setCreds({
      ...creds,
      [e.target.name]: value
    });
    //console.log("entryHandler", value, creds);
  };

  //console.log(btoa("lambda:lambdasecret"));

  // post to backend with creds object, token saved to localstorage for access to protected routes, pushes user to home page
  const HandleSubmit = e => {
    e.preventDefault();
    // axiosWithAuth()
    axios
      .post(
        "https://stilljack-gigapetbackend.herokuapp.com/login",
        `grant_type=password&username=${creds.username}&password=${creds.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda:lambdasecret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log("Login", creds);
        localStorage.setItem("token", res.data.access_token);
        props.history.push(`/home`);
      })
      .catch(err => {
        console.log("Login Error", err);
        return <h3>Username/Password Incorrect</h3>;
      });
  };

  const toRegister = () => {
    props.history.push("/register");
  };

  return (
    <>
      <Form className="form login" onSubmit={HandleSubmit}>
        <h2>Login</h2>
        <FormGroup>
          <Label for="username" lg={12}>
            Username
            <Input
              type="string"
              name="username"
              onChange={entryHandler}
              value={creds.username}
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label for="password" lg={12}>
            Password
            <Input
              type="string"
              name="password"
              onChange={entryHandler}
              value={creds.password}
            />
          </Label>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      <Form className="form register">
        <FormGroup>
          <Label>
            New to Gigapet?
            <Button onClick={toRegister}>Register</Button>
          </Label>
        </FormGroup>
      </Form>
    </>
  );
};

export default Login;
