import '../../styles/Home.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="landing-page" className="d-flex w-100 align-items-center justify-content-center text-white text-center">
      <main>
        <h1 className="font-weight-bolder">BEER SAGA</h1>
        <Button className="btn-secondary btn-lg" as={Link} to="/beers">View Beers</Button>
      </main>
    </div>
  );
}
