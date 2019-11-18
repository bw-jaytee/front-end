import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RegistrationForm = () => {
    const[user, setUser] = useState({email:'', password:'', children:0});

    const handleChanges = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault();
        setUser({email:'', password:'', children:0})
        console.log(user)
    };

    return (
        <Form onSubmit={submitForm}>
        <FormGroup row>
          <Label for="inputEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="inputEmail" placeholder="Enter Email" onChange={handleChanges} value={user.email} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="inputPassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="inputPassword" placeholder="Enter Password" onChange={handleChanges} value={user.password} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="childrenSelect" sm={2}>Number of Children</Label>
          <Col sm={10}>
            <Input type="select" name="children" id="childrenSelect" onChange={handleChanges} value={user.children}>
            <option>Select Number of Children</option>
            <option>1</option>
            <option>2</option>
            </Input>
          </Col>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    )
}

export default RegistrationForm