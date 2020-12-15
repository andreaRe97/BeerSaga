import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Beer } from '../../../models/Beer';

type Props = {
  beer: Beer;
};

export default function BeerItem({ beer }: Props) {
  return (
    <div className="col-sm-12 col-lg-6 my-2" key={beer.id}>
      <Card>
        <Card.Title className="pl-4 pt-4">{beer.name}</Card.Title>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs={12} sm={6}>
                  Brand: {beer.brand}
                </Col>
                <Col xs={12} sm={6}>
                  Alcohol: {beer.alcohol}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="text-right">
                <Col xs={12}>
                  <Card.Link
                    as={Link}
                    to={{
                      pathname: `/beers/${beer.id}`,
                      state: {
                        beer: beer,
                      },
                    }}
                  >
                    View Details
                  </Card.Link>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
