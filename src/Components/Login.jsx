// React
import React, { Component } from 'react';
// utilities
import { Auth } from 'aws-amplify';
import { navigate } from '@reach/router';
import ReactLoading from 'react-loading';
// react-bootstrap
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';
// CSS
import '../CSS/cards.css';
import '../CSS/loading-component.css';

class Login extends Component {
  state = {
    email: 'example.user@email.com',
    password: 'Passw0rd!',
    loading: false,
  };

  render() {
    const { loading, email, password } = this.state;

    return (
      <Card bg="dark" text="light" border="secondary" className="loginCard">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              required
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
          </Form.Group>
          {!loading ? (
            <Button variant="secondary" type="submit">
              Log In
            </Button>
          ) : (
            <ReactLoading className="loading-bubbles" type={'bubbles'} />
          )}
        </Form>
      </Card>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = async event => {
    const { email, password } = this.state;
    const { userHasAuthenticated } = this.props;
    event.preventDefault();
    this.setState({ loading: true });
    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      navigate('/');
    } catch (error) {
      alert(error);
      this.setState({ loading: false });
    }
  };
}

export default Login;
