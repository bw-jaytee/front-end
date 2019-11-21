import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Card, CardTitle, Button, CardDeck, CardSubtitle, CardBody, FormFeedback, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions';

const FoodEntry = (props) => {
   console.log("FoodEntry props", props);

    const [food, setFood] = useState({
        title: "",
        carbs: 0,
        proteins: 0,
        fats: 0
    });

    const FormSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
          .post("/eatz/create", food)
          .then(res => {
            console.log(res);
           props.fetchUserData();
          })
          .catch(err => console.log(err.response));
    };

    const handleChange = event => {
        if(event.target.name === "title"){
            setFood({...food, title: event.target.value});
        } else {
            setFood({...food, [event.target.name]: 1});
        }
    };

    return (
        <form onSubmit={FormSubmit} >
            <input type="text" name="title" placeholder="Enter food here" required onChange={handleChange} />
            <label>
                Carbohydrate
                <input type="checkbox" name="carbs" onChange={handleChange} />
            </label>
            <label>
                Protein
                <input type="checkbox" name="proteins" onChange={handleChange} />
            </label>
            <label>
                Fat
                <input type="checkbox" name="fats" onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default connect(state => state, { fetchUserData })(FoodEntry);