import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Card, Button, CardTitle, CardDeck,  CardSubtitle, CardBody } from 'reactstrap';

const FoodEntry = ({status, errors, touched}) => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        status && setFoods(foods => [...foods, status]);
    }, [status]);

  return (
      <div className="food-entry">
          <Form>
              <Field type="text" name="entry" placeholder="Enter food here" />
                {touched.entry && errors.entry && (
                    <p className="errors">{errors.entry}</p>
                )}
              <Field as="select" className="food-category" name="category">
                <option>Select a category</option>
                <option>Carbohydrate</option>
                <option>Protein</option>
                <option>Fat</option>
              </Field>
                {touched.category && errors.category && (
                    <p className="errors">{errors.category}</p>
                )}
              <button type="submit">Submit</button>
          </Form>
          {foods.map(food => (
            <CardDeck key={food.id}>
                <Card>
                    <CardBody>
                    <CardTitle>Food: {food.entry}</CardTitle>
                    <CardSubtitle>Category: {food.category}</CardSubtitle>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                    </CardBody>
                </Card>
            </CardDeck>
          ))}
      </div>
  );
};

const FormikFoodForm = withFormik({
    mapPropsToValues({ entry, category }) {
      return {
        entry: entry || "",
        category: category || ""
      };
    },
    validationSchema: Yup.object().shape({
        entry: Yup.string().required("Please enter a food"),
        category: Yup.string().required("Please select a food category")
    }),
    handleSubmit(values, { setStatus }) {
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
        })
        .catch(err => console.log(err.response));
    }
})(FoodEntry);

export default FormikFoodForm;