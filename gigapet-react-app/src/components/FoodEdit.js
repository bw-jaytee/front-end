import React, { useState, useEffect } from "react";

import {
  Card,
  CardTitle,
  Button,
  CardDeck,
  CardSubtitle,
  CardBody,
  FormFeedback,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUserData, editFood } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FoodEdit = props => {
  //console.log("***FoodEdit props", props);

  const [editing, setEditing] = useState({
    title: "",
    carbs: 0,
    proteins: 0,
    fats: 0
  });

  ///eatz/id/[eatzid]
  useEffect(() => {
    axiosWithAuth()
      .get(`/eatz/id/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setEditing(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  const FormSubmit = e => {
    e.preventDefault();
    const id = editing.eatzid;
    props.editFood(id, editing);
    props.history.push('/home');
  };

  const handleChange = event => {
    if (event.target.name === "title") {
      setEditing({ ...editing, title: event.target.value });
    } else {
      setEditing({ ...editing, [event.target.name]: 1 });
    }
  };

  return (
    <>
      <h2>Edit Meal</h2>
      <form onSubmit={FormSubmit}>
        <input
          type="text"
          name="title"
          value={editing.title}
          placeholder="Enter food here"
          required
          onChange={handleChange}
        />
        <label>
          Carbohydrate
          <input
            type="checkbox"
            name="carbs"
            onChange={handleChange}
            value={editing.carbs}
          />
        </label>
        <label>
          Protein
          <input
            type="checkbox"
            name="proteins"
            onChange={handleChange}
            value={editing.proteins}
          />
        </label>
        <label>
          Fat
          <input
            type="checkbox"
            name="fats"
            onChange={handleChange}
            value={editing.fats}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    APIdata: state.APIdata
  };
};

export default connect(mapStateToProps, { fetchUserData, editFood })(
  withRouter(FoodEdit)
);
