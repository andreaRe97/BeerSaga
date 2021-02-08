import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { DomainStatus } from '../../../state/types';
import { useUser } from '../../../state/user/hook';

export default function HeaderNavbar() {
  const { user, status } = useUser();

  return (
    <Navbar className="navbar-dark bg-dark sticky-top">
      <Navbar.Brand as={Link} to="/">
        BeerSaga
      </Navbar.Brand>
      {status === DomainStatus.LOADED ? (
        <Nav>
          <Nav.Link as={Link} to="/beers/new">
            Add a new beer
          </Nav.Link>
        </Nav>
      ) : null}
      <Nav className="ml-auto mr-1">
        {status === DomainStatus.LOADED ? (
          <span className="text-muted">{user!.username}</span>
        ) : (
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
}
