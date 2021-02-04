import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigation } from '../../../hooks';

import { Beer, BeerMock } from '../../../models/Beer';
import { useBeers } from '../../../store/beers/hook';

export default function BeerNew() {
  const [beer, setBeer] = useState<Beer>(BeerMock);
  const { createBeer } = useBeers();
  const { goToBeerList } = useNavigation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBeer({ ...beer, [e.target.name]: e.target.value });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBeer(beer as Beer);
    goToBeerList();
  };

  return (
    <Form className="col-md-6 offset-md-3 mt-5" onSubmit={handleFormSubmit}>
      <h2 className="text-center">Add a new beer</h2>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Beer name"
          value={beer?.name}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="brand">
        <Form.Label>Brand</Form.Label>
        <Form.Control
          name="brand"
          type="text"
          placeholder="Beer brand"
          value={beer?.brand}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="alcohol">
        <Form.Label>Alcohol</Form.Label>
        <Form.Control
          name="alcohol"
          type="number"
          placeholder="0.0"
          value={beer?.alcohol}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Submit
      </Button>
    </Form>
  );
}
