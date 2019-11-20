import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Card, CardTitle, CardDeck,  CardSubtitle, CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const FoodEntry = ({status, errors, touched}) => {

    const [foods, setFoods] = useState([]);
    const [splitButtonOpen, setSplitButtonOpen] = useState(false);

    const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

    useEffect(() => {
        status && setFoods(foods => [...foods, status]);
    }, [status]);

  return (
      <div className="food-entry">
        <InputGroup>
          <InputGroupButtonDropdown addonType="prepend" isOpen={splitButtonOpen} toggle={toggleSplit}>
            <Button outline className="food-category" name="category">Select a category</Button>
              {touched.category && errors.category && (
                  <p className="errors">{errors.category}</p>
              )}
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem>Carbohydrate</DropdownItem>
              <DropdownItem>Protein</DropdownItem>
              <DropdownItem>Fat</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input name="entry" placeholder="Enter food here" />
            {touched.entry && errors.entry && (
                <p className="errors">{errors.entry}</p>
            )}
          <InputGroupAddon addonType="append"><Button color="secondary">Submit</Button></InputGroupAddon>
        </InputGroup>





          {/* <Form className="food-form">
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
              <Button type="submit">Submit</Button>
          </Form> */}
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
        .post("https://stilljack-gigapetbackend.herokuapp.com/eatz/create", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
        })
        .catch(err => console.log(err.response));
    }
})(FoodEntry);

export default FormikFoodForm;