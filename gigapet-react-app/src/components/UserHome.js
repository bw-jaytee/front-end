import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button } from 'reactstrap';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import FoodEntry from "./FoodEntry";
import PetCard from "./PetCard";
import EatzList from './EatzList';
import "../styles.css";

// import FoodSummary from "??";


const UserHome = props => {
  //console.log("UserHome props", props);

  //this state will hold ALL user data: userId, name/info, food entry history, pet status as per backend set-up
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   axiosWithAuth()
  //   .get("/eatz/alleatzforuser")
  //     .then(res => {
  //       console.log(res.data);
  //       setUserData(res.data);
  //     })
  //     .catch(err => console.log(err.response));
  // };

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
        <Button className ="submitButton" onClick={logOut}>Log Out</Button>
      </header>

      <div className="components">
        <PetCard />
        <FoodEntry />
        <EatzList />
        <Button><Link body inverse style={{color: "white", textDecoration: "none"}} to="/summary">See Food Summary</Link></Button>
      </div>

      
    </>
  );
};

export default withRouter(UserHome);
