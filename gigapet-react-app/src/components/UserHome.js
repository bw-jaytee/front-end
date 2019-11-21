import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import FoodEntry from "./FoodEntry";
import PetCard from "./PetCard";
import "../styles.css";
import { fetchUserData } from '../actions';


const UserHome = props => {
  console.log(props);

  //this state will hold ALL user data: userId, name/info, food entry history, pet status as per backend set-up
  // const [userData, setUserData] = useState({});

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

  const formatName = name => {
    var array1 = name.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');

  }

  return (
    <>
      <header className="header">
        <h3>{`Welcome ${formatName(props.APIdata.fullname)}`}</h3>
        <button className ="submitButton" onClick={logOut}>Log Out</button>
      </header>

      <div className="components">
        <PetCard />
        <FoodEntry />
      </div>

      <Button onClick={goToSummary}>See Summary -></Button>
    </>
  );
};

export default connect(state => state, { fetchUserData })(withRouter(UserHome));
