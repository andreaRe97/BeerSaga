import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useUser } from '../../../store/user/hook';

export default function HeaderNavbar() {
  const { user, status } = useUser();

  return (
    <Navbar className="navbar-dark bg-dark sticky-top">
      <Navbar.Brand as={Link} to="/">
        BeerSaga
      </Navbar.Brand>
      {status === 'logged-in' ? (
        <Nav>
          <Nav.Link as={Link} to="/beers/new">
            Add a new beer
          </Nav.Link>
        </Nav>
      ) : null}
      <Nav className="ml-auto mr-1">
        {status === 'logged-in' ? (
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
