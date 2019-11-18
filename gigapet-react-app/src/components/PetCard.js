import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const PetCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Status: Happy</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PetCard;