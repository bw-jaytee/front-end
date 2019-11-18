import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const PetCard = (props) => {
  return (
    <div className="pet-card">
      <Card>
        <CardImg top width="100%" src="https://source.unsplash.com/random" alt="Card image cap" />
        <CardBody>
          <CardTitle>Status: Happy</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PetCard;