import React, { useEffect } from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import {animate} from './beerAnimation';
import '../../../styles/BeerDetail.css';

export default function BeerDetail({ location }: RouteComponentProps) {
  const { beer }: any = location.state;
  const undesiredBeerProperties = [
    'id',
    'name',
    'published_at',
    'created_at',
    'updated_at',
    'isFavourite',
  ];

  function renderProperty(key: string, value: string | number) {
    return (
      <ListGroup.Item key={key}>
        <Row>
          <Col xs={6} className="text-capitalize">
            <span className="font-weight-bold">{key}</span>
          </Col>
          <Col xs={6}>{value}</Col>
        </Row>
      </ListGroup.Item>
    );
  }

  function renderProperties() {
    return Object.keys(beer)
      .filter((key) => !undesiredBeerProperties.includes(key))
      .map((key) => {
        return renderProperty(key, beer[key]);
      });
  }

  useEffect(() => {
    animate();
  }, [])

  return (
    <div className="container">
      <Card className="beer-detail">
        <div className="beer">
          <div className="circle"></div>
          <img src="https://www.horiba.com/fileadmin/_processed_/csm_01_02-2019_Beer_Brewing_53ef2818e5.png" alt="beer"/>
        </div>
        <div className="info">
          <Card.Title className="text-center mt-2 p-2">{beer.name}</Card.Title>
          <ListGroup variant="flush">{renderProperties()}</ListGroup>
        </div>
      </Card>
    </div>
  );
}
