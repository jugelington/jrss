import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { navigate } from '@reach/router';
import ReactLoading from 'react-loading';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  };

  render() {
    const { loading } = this.state;

    return (
      <Card
        bg="dark"
        text="light"
        border="secondary"
        style={{
          textAlign: 'center',
          padding: '5px',
          width: '30vw',
        }}
      >
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              required
              type="email"
              placeholder="Enter your email address"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your password"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          {!loading ? (
            <Button variant="secondary" type="submit">
              Log In
            </Button>
          ) : (
            <ReactLoading
              style={{
                margin: '0 auto',
                height: '48px',
                width: '48px',
              }}
              type={'bubbles'}
            />
          )}
        </Form>
      </Card>
    );
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    const { userHasAuthenticated } = this.props;
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      navigate('/');
    } catch (e) {
      alert('Error! Please try again.');
      this.setState({ loading: false });
    }
  };
}

export default Login;
