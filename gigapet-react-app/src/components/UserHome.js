import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

import FoodEntry from "./FoodEntry";
import PetCard from "./PetCard";
import EatzList from './EatzList';
import { fetchUserData, deleteFood, editFood } from "../actions";

const UserHome = props => {
  console.log("UserHome props", props);

  useEffect(() => {
    props.fetchUserData();
  }, []);

  const logOut = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  //capitalizes first letters of fullname for welcome banner
  const formatName = name => {
    var array1 = name.split(" ");
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(" ");
  };

  return (
    <>
      <header className="header">
        <h3>{`Welcome ${formatName(props.APIdata.fullname)}`}</h3>
        <Button className ="submitButton" onClick={logOut}>Log Out</Button>
      </header>

      <div className="components">
        <PetCard />
        <FoodEntry />
        <EatzList />
        {/* <AriTest APIeatzData={props.APIdata.usereatz}
        deleteFood={props.deleteFood}
        editFood={props.editFood}
        fetchUserData={fetchUserData}
        /> */}
        <Button><Link body inverse style={{color: "white", textDecoration: "none"}} to="/summary">See Food Summary</Link></Button>
      </div>
    </>
  );
};

export default connect(state => state, { fetchUserData, deleteFood, editFood })(withRouter(UserHome));
