import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigation } from '../../../hooks';

import { AuthFields } from '../../../models/User';
import { useUser } from '../../../state/user/hook';

export default function Login() {
  const [authFields, setAuthFields] = useState<AuthFields>({
    identifier: 'andrea.re',
    password: '123456',
  });
  const { loginUser } = useUser();
  const { goToBeerList } = useNavigation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAuthFields({ ...authFields, [e.target.name]: e.target.value });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    loginUser(authFields);
    goToBeerList();
    }
    catch {
      console.log();
      
    }
  };

  return (
    <Form className="col-md-2 offset-md-5 mt-5" onSubmit={handleFormSubmit}>
      <h2 className="text-center">Login</h2>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="identifier"
          type="text"
          placeholder="andrea.re"
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
          placeholder="123456"
          value={authFields!.password}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button
        disabled={authFields.identifier === '' && authFields.password === ''}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
