import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import FoodEntry from "./FoodEntry";
import PetCard from "./PetCard";
import "../styles.css";
import { fetchUserData, deleteFood, editFood } from "../actions";
import AriTest from "./AriTest";

const UserHome = props => {
  console.log("UserHome props", props);

  useEffect(() => {
    props.fetchUserData();
  }, []);

  const logOut = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  const goToSummary = () => {
    props.history.push("/summary");
  };

  //capitalizes first letters of fullname for welcome
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
        <button className="submitButton" onClick={logOut}>
          Log Out
        </button>
      </header>

      <div className="components">
        {/* <PetCard />
        <FoodEntry /> */}
        <AriTest APIeatzData={props.APIdata.usereatz}
        deleteFood={props.deleteFood}
        editFood={props.editFood}
        fetchUserData={fetchUserData}
        />
      </div>

      <Button onClick={goToSummary}>See Summary -></Button>
    </>
  );
};

export default connect(state => state, { fetchUserData, deleteFood, editFood })(withRouter(UserHome));
