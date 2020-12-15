import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

type Props = {
  message: string;
};

export default function LoadingSpinner({ message }: Props) {
  return (
    <Row className="text-center text-white">
      <Col xs={12}>
        <h3>{message}</h3>
      </Col>
      <Col xs={12}>
        <Spinner animation="border" />
      </Col>
    </Row>
  );
}
