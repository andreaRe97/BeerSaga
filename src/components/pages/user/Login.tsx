import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigation } from '../../../hooks';

import { AuthFields } from '../../../models/User';
import { useUser } from '../../../store/user/hook';

export default function Login() {
  const [authFields, setAuthFields] = useState<AuthFields>({
    identifier: '',
    password: '',
  });
  const { loginUser } = useUser();
  const { goToBeerList } = useNavigation();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthFields({ ...authFields, [e.target.name]: e.target.value });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(authFields);
    goToBeerList();
  };

  return (
    <Form className="col-md-6 offset-md-3 mt-5" onSubmit={handleFormSubmit}>
      <h2 className="text-center">Login</h2>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="identifier"
          type="text"
          placeholder="username"
          value={authFields!.identifier}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="*****"
          value={authFields!.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
