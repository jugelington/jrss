import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

class AddFeed extends Component {
  state = {
    url: '',
    displayName: '',
    validated: false,
  };

  render() {
    const { validated } = this.state;
    return (
      <section>
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Group controlId="formGroupFeedUrl">
            <Form.Label>RSS URL</Form.Label>
            <Form.Control
              required
              type="url"
              placeholder="enter rss url"
              defaultValue="http://feeds2.feedburner.com/time/topstories"
              onChange={e => this.handleChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid url.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupDisplayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="enter display name"
              defaultValue="Time Top Stories"
              onChange={e => this.handleChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a display name.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    );
  }

  handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    const name = e.currentTarget[1].value;
    const url = e.currentTarget[0].value;
    this.setState({ validated: true });
    this.props.subscribeToFeed(name, url);
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }
}

export default AddFeed;
