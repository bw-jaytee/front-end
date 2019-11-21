import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardSubtitle, CardDeck, Button, CardBody, CardTitle } from 'reactstrap';

import { fetchUserData } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EatzList = props => {
  //console.log(props, "in EatzList");
  const [userData, setUserData] = useState();

  useEffect(() => {
    props.fetchUserData();
    setUserData(props.APIdata.usereatz);
  }, []);
  console.log("in EatzList userData", userData);

  //console.log("in EatzList", userData);

  // const fetchData = () => {
  //     axiosWithAuth()
  //     .get("/eatz/alleatzforuser")
  //       .then(res => {
  //         console.log(res.data);
  //         setUserData(res.data);
  //       })
  //       .catch(err => console.log(err.response));
  //   };
  return (
    <>
     {!userData ? <p>Loading...</p> : 
     userData.map(food => (
            <CardDeck key={food.id}>
                <Card>
                    <CardBody>
                        <CardTitle>Food: {food.title}</CardTitle>
                        <CardSubtitle>Categories: </CardSubtitle>
                        <CardSubtitle>Carbohydrate: {food.carbs}</CardSubtitle>
                        <CardSubtitle>Protein: {food.proteins}</CardSubtitle>
                        <CardSubtitle>Fat: {food.fats}</CardSubtitle>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        ))} 
  </>);
};

export default connect(state => state, { fetchUserData })(EatzList);
