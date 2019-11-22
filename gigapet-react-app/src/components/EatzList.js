import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Card, CardSubtitle, CardDeck, Button, CardBody, CardTitle } from 'reactstrap';

import { fetchUserData, deleteFood } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const EatzList = props => {
  console.log(props, "in EatzList");
  const [userData, setUserData] = useState();

  useEffect(() => {
    props.fetchUserData();
    setUserData(props.APIdata.usereatz);
  }, [props.APIdata.usereatz.length]);

  console.log("in EatzList userData", userData);

  console.log("in EatzList", userData);


const deleteHelper = id => {
props.deleteFood(id);
props.fetchUserData();
};

const handleEdit = (id) => {
props.history.push(`/editMeal/${id}`);
  };

  return (
    <>
     {!userData ? <p>Loading...</p> : 
     userData.map(food => (
            <CardDeck key={food.eatzid}>
                <Card>
                    <CardBody>
                        <CardTitle>Food: {food.title}</CardTitle>
                        <CardSubtitle>Categories: </CardSubtitle>
                        <CardSubtitle>Carbohydrate: {food.carbs}</CardSubtitle>
                        <CardSubtitle>Protein: {food.proteins}</CardSubtitle>
                        <CardSubtitle>Fat: {food.fats}</CardSubtitle>
                        <Button onClick={()=> handleEdit(food.eatzid)}>Edit</Button>
                        <Button onClick={()=> deleteHelper(food.eatzid)}>Delete</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        ))} 
  </>);
};

export default connect(state => state, { fetchUserData, deleteFood })(withRouter(EatzList));
