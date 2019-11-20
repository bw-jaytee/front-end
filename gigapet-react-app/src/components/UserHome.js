import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FoodEntry from "./FoodEntry";
import PetCard from "./PetCard";
// import RegistrationForm from "./RegistrationForm";
import "../styles.css";

const UserHome = props => {
  console.log("UserHome props.rest", props);
  //this state will hold ALL user data: userId, name/info, food entry history, pet status as per backend set-up
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axiosWithAuth()
      .get("API endpoint HERE")
      .then(res => {
        console.log(res.data);
        //setUserData({});
      })
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
        <PetCard />
        <FoodEntry />
      </div>
      <Button>See Summary -></Button>
    </>
  );
};

export default withRouter(UserHome);
