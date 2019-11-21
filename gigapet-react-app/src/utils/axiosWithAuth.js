import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: `https://stilljack-gigapetbackend.herokuapp.com`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};
