import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FoodEntry = ({status}) => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        status && setFoods(foods => [...foods, status]);
    }, [status]);

  return (
      <div>
          <Form>
              <Field type="text" name="foodEntry" placeholder="Enter food here" />
              <Field as="select" className="food-category" name="category">
                <option>Select a category</option>
                <option>Carbohydrate</option>
                <option>Protein</option>
                <option>Fat</option>
              </Field>
              <button>Submit</button>
          </Form>
          {foods.map(food => (
              <ul>
                <li>Food: {food.foodEntry}</li>
                <li>Category: {food.category}</li>
              </ul>
          ))}
      </div>
  );
};

const FormikFoodForm = withFormik({
    mapPropsToValues({ food, category }) {
      return {
        food: food || "",
        category: category || ""
      };
    },
    validationSchema: Yup.object().shape({
        food: Yup.string().required("This is a food error!"),
        category: Yup.string().required("This is a category error!")
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