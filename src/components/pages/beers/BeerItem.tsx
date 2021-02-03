import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Beer } from '../../../models/Beer';
import { useBeers } from '../../../store/beers/hook';
import LikeButton from '../../utils/LikeButton';

type Props = {
  beer: Beer;
};

export default function BeerItem({ beer }: Props) {
  const { deleteBeer } = useBeers();
  return (
    <div className="beer-item col-sm-12 col-lg-6 my-1">
      <Card>
        <Card.Title className="pl-4 pt-4">
          <Row>
            <Col xs={12}>
              {beer.name}
              <LikeButton isFavourite={beer.isFavourite} beer={beer} />
            </Col>
          </Row>
        </Card.Title>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs={6}>
                  <span className="font-weight-bold">Brand:</span> {beer.brand}
                </Col>
                <Col xs={6}>
                  <span className="font-weight-bold">Alcohol:</span>{' '}
                  {beer.alcohol}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
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
                <Col className="text-right">
                  <Button
                    className="text-danger"
                    variant="link"
                    onClick={() => {
                      deleteBeer(beer);
                    } }
                  >
                    Delete Beer
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
