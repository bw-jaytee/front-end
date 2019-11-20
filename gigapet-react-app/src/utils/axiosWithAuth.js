import axios from "axios";

// const axios = require("axios");
//   const oauth = require("axios-oauth-client");

export const axiosWithAuth = () => {

  return axios.create({
    baseURL: `https://stilljack-gigapetbackend.herokuapp.com`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

//=================
// below for reference
/*
axios.post(
  "http://localhost:8443/oauth/token",
  `grant_type=password&username=${this.state.username}&password=${this.state.password}`,
  {
    headers: {
      // btoa is converting our client id/client secret into base64
      Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
);
*/
