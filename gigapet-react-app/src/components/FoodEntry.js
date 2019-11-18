import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FoodEntry = (props) => {
  return (
    <Form>
      <FormGroup>
        <Input type="text" name="foodEntry" id="foodEntry" placeholder="Enter food here" />
      </FormGroup>
      <FormGroup>
        <Input type="select" name="foodCategory" id="foodCategory">
          <option>Select a category</option>
          <option>Carbohydrate</option>
          <option>Protein</option>
          <option>Fat</option>
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default FoodEntry;