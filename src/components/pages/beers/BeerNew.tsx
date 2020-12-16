import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigation } from '../../../hooks';

import { Beer } from '../../../models/Beer';
import { useBeers } from '../../../store/beers/hook';

export default function BeerNew() {
  const [beer, setBeer] = useState<Partial<Beer>>();
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
      <Form.Group controlId="style">
        <Form.Label>Style</Form.Label>
        <Form.Control
          name="style"
          type="text"
          placeholder="Beer style"
          value={beer?.style}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="hop">
        <Form.Label>Hop</Form.Label>
        <Form.Control
          name="hop"
          type="text"
          placeholder="Beer hop"
          value={beer?.hop}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="yeast">
        <Form.Label>Yeast</Form.Label>
        <Form.Control
          name="yeast"
          type="text"
          placeholder="Type of yeast"
          value={beer?.yeast}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="malts">
        <Form.Label>Malts</Form.Label>
        <Form.Control
          name="malts"
          type="text"
          placeholder="Type of malts"
          value={beer?.malts}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="ibu">
        <Form.Label>IBU</Form.Label>
        <Form.Control
          name="ibu"
          type="number"
          placeholder="0"
          value={beer?.ibu}
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
