import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const EatzList = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = () => {
        axiosWithAuth()
        .get("/eatz/alleatzforuser")
          .then(res => {
            console.log(res.data);
            setFoodList(res.data);
          })
          .catch(err => console.log(err.response));
      };
      return (
        <div>Food Entries go here</div>
        /* {foods.map(foodItem => (
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
        ))} */
      );
};

export default EatzList;