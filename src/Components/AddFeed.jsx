import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';

class AddFeed extends Component {
  state = {
    formGroupFeedUrl: '',
    formGroupDisplayName: '',
    formGroupFeedTags: '',
    validated: false,
  };

  render() {
    const { validated } = this.state;
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
          <Form.Group controlId="formGroupDisplayName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="enter name of feed"
              onChange={e => this.handleChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupFeedUrl">
            <Form.Label>URL</Form.Label>
            <Form.Control
              required
              type="url"
              placeholder="enter url of rss feed"
              onChange={e => this.handleChange(e)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid url.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formGroupFeedTags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter tags to categorise feed"
              onChange={e => this.handleChange(e)}
            />
            <Form.Text>Optional. Seperate tags with commas</Form.Text>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Subscribe
          </Button>
        </Form>
      </Card>
    );
  }

  handleSubmit(e) {
    const form = e.currentTarget;
    e.preventDefault();
    !form.checkValidity() && e.stopPropagation();
    const {
      formGroupDisplayName,
      formGroupFeedUrl,
      formGroupFeedTags,
    } = this.state;
    this.setState({ validated: true });
    this.props.subscribeToFeed(
      formGroupDisplayName,
      formGroupFeedUrl,
      formGroupFeedTags.split(','),
    );
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }
}

export default AddFeed;
