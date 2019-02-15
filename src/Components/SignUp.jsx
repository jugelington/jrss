import React, { Component } from 'react';
// utilities
import { navigate } from '@reach/router';
import { Auth } from 'aws-amplify';
import ReactLoading from 'react-loading';
// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
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
    return this.state.newUser === null
      ? this.signUpForm()
      : this.confirmationForm();
  }

  signUpForm = () => {
    const { loading } = this.state;
    return (
      <section className="signup-card box">
        <h3 className="text-center">Sign Up</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-div">
            <label for="email">Email:</label>
            <input
              autoFocus
              required
              id="email"
              type="email"
              placeholder="Enter your email address"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-div">
            <label for="password">Password:</label>
            <input
              required
              id="password"
              type="password"
              placeholder="Enter a password"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-div">
            <label for="confirmPassword">Confirm Password:</label>
            <input
              required
              type="password"
              id="confirmPassword"
              placeholder="Re-enter a password"
              onChange={this.handleChange}
            />
          </div>

          {!loading ? (
            <div className="text-center">
              <ButtonGroup>
                <Button variant="outline-light" href="/login">
                  Log In
                </Button>
                <Button variant="light" type="submit">
                  Sign Up
                </Button>
              </ButtonGroup>
            </div>
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
        </form>
      </section>
    );
  };

  confirmationForm = () => {
    const { loading, confirmationCode } = this.state;
    return (
      <section className="signup-card box">
        <section className="text-center">
          <h3>Confirmation</h3>
          <h6>Check your email for a confirmation code</h6>
        </section>
        <br />
        <form onSubmit={this.handleConfirmationSubmit}>
          <div className="form-div">
            <label for="confirmationCode">Confirmation Code:</label>
            <input
              autoFocus
              id="confirmationCode"
              required
              type="tel"
              value={confirmationCode}
              onChange={this.handleChange}
            />
          </div>
          {!loading ? (
            <div className="text-center">
              <Button variant="light" type="submit">
                Confirm
              </Button>
            </div>
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
        </form>
      </section>
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
