// React
import React, { Component } from 'react';
// utilities
import { Auth } from 'aws-amplify';
import { navigate } from '@reach/router';
import ReactLoading from 'react-loading';
// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
// CSS
import '../CSS/main.css';
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
      <section className="login-card text-center box">
        <h3 className="text-center">Login</h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-div">
            <label for="email">Email:</label>
            <input
              id="email"
              autoFocus
              required
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-div">
            <label for="password">Password:</label>
            <input
              id="password"
              required
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={this.handleChange}
            />
          </div>
          <br />
          {!loading ? (
            <div className="text-center login-btn-grp">
              <ButtonGroup>
                <Button variant="outline-light" href="/signup">
                  Sign Up
                </Button>
                <Button variant="light" type="submit">
                  Log In
                </Button>
              </ButtonGroup>
            </div>
          ) : (
            <ReactLoading className="loading-bubbles" type={'bubbles'} />
          )}
        </form>
      </section>
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
