import React, { Component } from 'react';
// utilities
import { navigate } from '@reach/router';
import { Auth } from 'aws-amplify';
import ReactLoading from 'react-loading';
// react-bootstrap
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';
// css
import '../CSS/cards.css';

class SignUp extends Component {
  state = {
    loading: false,
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: '',
    newUser: null,
  };

  render() {
    return (
      <Card bg="dark" text="light" border="secondary" className="signup-card">
        {this.state.newUser === null
          ? this.signUpForm()
          : this.confirmationForm()}
      </Card>
    );
  }

  signUpForm = () => {
    const { loading } = this.state;
    return (
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
          <Form.Control.Feedback type="invalid">
            Please enter your email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter a password"
            onChange={e => this.handleChange(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Re-enter a password"
            onChange={e => this.handleChange(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a matching password
          </Form.Control.Feedback>
        </Form.Group>
        {!loading ? (
          <Button variant="secondary" type="submit">
            Sign Up
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
    );
  };

  confirmationForm = () => {
    const { loading, confirmationCode } = this.state;
    return (
      <Form onSubmit={e => this.handleConfirmationSubmit(e)}>
        <Form.Group controlId="confirmationCode">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            required
            type="tel"
            value={confirmationCode}
            placeholder="Enter your confirmation code"
            onChange={e => this.handleChange(e)}
          />
          {!loading ? (
            <Button variant="secondary" type="submit">
              Confirm
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
        </Form.Group>
      </Form>
    );
  };

  validateForm = () => {
    const { password, confirmPassword, email } = this.state;
    return (
      email.length > 0 && password.length > 0 && password === confirmPassword
    );
  };

  validateConfirmationForm = () => {
    const { confirmationCode } = this.state;
    return confirmationCode.length > 0;
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async e => {
    const { email, password } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    try {
      const newUser = await Auth.signUp({
        username: email,
        password: password,
      });
      this.setState({
        newUser,
      });
    } catch (error) {
      if (error.code === 'UsernameExistsException') {
        try {
          const newUser = await Auth.resendSignUp(email);
          this.setState({ newUser });
        } catch (error) {
          alert(error.message);
        }
      }
      alert(error.message);
    }
    this.setState({ loading: false });
  };

  handleConfirmationSubmit = async e => {
    const { email, password, confirmationCode } = this.state;

    e.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn(email, password);
      this.props.userHasAuthenticated(true);
      navigate('/');
    } catch (error) {
      alert(error.message);
      this.setState({ isLoading: false });
    }
  };
}

export default SignUp;
