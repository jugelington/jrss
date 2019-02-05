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
    validated: false,
    loading: false,
  };

  render() {
    const { validated, loading } = this.state;

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
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email address"
              onChange={e => this.handleChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your email address
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your password"
              onChange={e => this.handleChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your password
            </Form.Control.Feedback>
          </Form.Group>
          {!loading ? (
            <Button variant="secondary" type="submit">
              Log In
            </Button>
          ) : (
            <div style={{ margin: '0 auto', width: '48px', height: '48px' }}>
              <ReactLoading
                type={'spin'}
                color={'grey'}
                height={48}
                width={48}
              />
            </div>
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
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
      navigate('/');
    } catch (e) {
      alert('Error! Please try again.');
      this.setState({ loading: false });
    }
  };
}

export default Login;
