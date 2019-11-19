import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";
// import FoodEntry from "./FoodEntry";
// import PetCard from "./PetCard";
// import FoodSummary from "??";
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

  const goToSummary = () => {
props.history.push("/register")
  };


  return (
    <>
      <header className="header">
        <h3>{`Welcome username`}</h3>
        <button onClick={logOut}>Log Out</button>
      </header>
      {/* 

    <FoodEntry  
    **Pass in food data here**
    />

    <PetCard 
    **Pass in pet data here**
    />
    
    */}
      <div className="components">
        <h3 className="component">FoodEntry</h3>
        <h3 className="component">PetStatus</h3>
      </div>
      <button>See Summary -></button>
    </>
  );
};

export default withRouter(UserHome);
