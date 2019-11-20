import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';
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
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    useEffect(() => {
        status && setFoods(foods => [...foods, status]);
    }, [status]);

  return (
      <div className="food-entry">
        {/* <InputGroup>
          <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle caret type="select" className="food-category" name="category">
              Select a category
            </DropdownToggle>
              {touched.category && errors.category && (
                  <p className="errors">{errors.category}</p>
              )}
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
        </InputGroup> */}





          <Form className="food-form">
              <Field type="text" name="title" placeholder="Enter food here" />
                {touched.title && errors.title && (
                    <p className="errors">{errors.title}</p>
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
          </Form>
          {foods.map(food => (
            <CardDeck key={food.id}>
                <Card>
                    <CardBody>
                    <CardTitle>Food: {food.title}</CardTitle>
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
    mapPropsToValues({ title, carbs, proteins, fats }) {
      return {
        title: title || "",
        carbs: carbs || 0,
        proteins: proteins || 0,
        fats: fats || 0
      };
    },
    validationSchema: Yup.object().shape({
        title: Yup.string().required("Please enter a food"),
        category: Yup.string().required("Please select a food category")
    }),
    handleSubmit(values, { setStatus }) {
      console.log(values);
      axiosWithAuth()
        .post("/eatz/create", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
        })
        .catch(err => console.log(err.response));
    }
})(FoodEntry);

export default FormikFoodForm;