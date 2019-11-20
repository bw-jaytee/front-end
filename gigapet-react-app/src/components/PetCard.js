import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import egg from '../img/egg.png';

const PetCard = (props) => {
  return (
    <div className="pet-card">
      <Card>
        <CardImg top width="100%" src={egg} alt="Card image cap" />
        <CardBody>
          <CardTitle>Status: Sad</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PetCard;