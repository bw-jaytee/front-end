import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

import { axiosWithAuth } from "../utils/axiosWithAuth";
// import FoodEntry from "./FoodEntry";
// import PetCard from "./PetCard";
// import RegistrationForm from "./RegistrationForm";
import "../styles.css";

const UserHome = props => {
    console.log("UserHome props.rest", props);
  //this state will hold ALL user data: userId, name/info, food entry history, pet status
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axiosWithAuth()
      .get("API endpoint HERE")
      .then(res => {})
      .catch(err => console.log(err));
  };

  const logOut = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  return (
    <>
      <header className="header">
        <h3>{`Welcome username`}</h3>
        <button onClick={logOut}>Log Out</button>
      </header>
      <div className="components">
        <h3 className="component">FoodEntry</h3>
        <h3 className="component">PetStatus</h3>
      </div>
      <button>See Summary -></button>
    </>
  );
};

export default withRouter(UserHome);
