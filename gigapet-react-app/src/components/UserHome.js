import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import FoodEntry from "./FoodEntry";
import PetCard from "./PetCard";
import "../styles.css";

// import FoodSummary from "??";


const UserHome = props => {
  //console.log("UserHome props", props);

  //this state will hold ALL user data: userId, name/info, food entry history, pet status as per backend set-up
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axiosWithAuth()
    .get("/eatz/alleatzforuser")
      .then(res => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch(err => console.log(err.response));
  };

  const logOut = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  const goToSummary = () => {
    props.history.push("/register");
  };

  return (
    <>
      <header className="header">
        <h3>{`Welcome username`}</h3>
        <button className ="submitButton" onClick={logOut}>Log Out</button>
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
