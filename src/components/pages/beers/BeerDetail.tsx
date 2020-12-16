import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

export default function BeerDetail({ location }: RouteComponentProps) {
  const { beer }: any = location.state;
  const undesiredBeerProperties = [
    'id',
    'name',
    'published_at',
    'created_at',
    'updated_at',
  ];

  function renderRow(key: string, value: string | number) {
    return (
        <ListGroup.Item key={key}>
          <Row>
            <Col xs={6} className="text-capitalize"><span className="font-weight-bold">{key}</span></Col>
            <Col xs={6}>{value}</Col>
          </Row>
        </ListGroup.Item>

    );
  }

  function renderProperties() {
    return Object.keys(beer)
      .filter((key) => !undesiredBeerProperties.includes(key))
      .map((key) => {
        return renderRow(key, beer[key]);
      });
  }

  return (
    <div className="col-sm-12 col-lg-4 offset-lg-4 mt-5">
      <Card>
        <Card.Title className="text-center mt-2 p-2">{beer.name}</Card.Title>
        <ListGroup variant="flush">{renderProperties()}</ListGroup>
      </Card>
    </div>
  );
}
