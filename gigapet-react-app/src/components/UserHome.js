import React from "react";

const UserHome = props => {


    const logOut = () => {
localStorage.clear();
//props.history.push("/login");
    };

  return (
    <>
    <h3>{`Welcome username`}</h3>
    <button onClick={logOut}>Log Out</button>
      <h3>FoodEntry</h3>
      <h3>PetStatus</h3>
      <button>See Summary -></button>
    </>
  );
};

export default UserHome;
