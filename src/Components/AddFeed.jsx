import React, { Component } from 'react';
import { API } from 'aws-amplify';
import ReactLoading from 'react-loading';
import { navigate } from '@reach/router';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';

class AddFeed extends Component {
  state = {
    url: '',
    name: '',
    tags: '',
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
          <Form.Group controlId="name">
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
          <Form.Group controlId="url">
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
          <Form.Group controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter tags to categorise feed"
              onChange={e => this.handleChange(e)}
            />
            <Form.Text>Optional. Seperate tags with commas</Form.Text>
          </Form.Group>
          {!loading ? (
            <Button variant="secondary" type="submit">
              Subscribe
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

  // handleSubmit(e) {
  //   const form = e.currentTarget;
  //   e.preventDefault();
  //   !form.checkValidity() && e.stopPropagation();
  //   const {
  //     name,
  //     url,
  //     tags
  //   } = this.state;
  //   this.setState({ validated: true });
  //   this.props.subscribeToFeed(
  //     name,
  //     url,
  //     tags.split(','),
  //   );
  // }

  handleSubmit = async e => {
    const { url, name, tags } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await this.subscribeToFeed({
        displayName: name,
        url: url,
        tags: tags.split(','),
      });
      navigate('/');
    } catch (error) {
      alert(error);
      this.setState({ loading: false });
    }
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  subscribeToFeed = feed => {
    return API.post('jrss-api', '/feeds', { body: feed });
  };
}

export default AddFeed;
