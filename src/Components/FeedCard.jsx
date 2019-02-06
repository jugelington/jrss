import React, { Component } from 'react';
import Card from 'react-bootstrap/lib/Card';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import { navigate } from '@reach/router';

import ReactLoading from 'react-loading';
import edit from '../Images/edit.png';
import back from '../Images/back.png';
import { API } from 'aws-amplify';

class FeedCard extends Component {
  state = {
    editing: false,
    displayName: '',
    url: '',
    tags: [],
    loading: false,
  };

  render() {
    const { feed } = this.props;
    const { editing } = this.state;
    return (
      <Card
        style={{
          margin: '5px',
          textAlign: 'center',
          width: '400px',
        }}
        className="feed-card"
        variant="dark"
        bg="dark"
        text="light"
        border="secondary"
      >
        {editing ? this.editCard(feed) : this.staticCard(feed)}
      </Card>
    );
  }

  staticCard = feed => {
    return (
      <>
        <Card.Header>
          <Card.Title>
            {feed.displayName}
            <img
              src={edit}
              width="24px"
              alt="edit"
              style={{ float: 'right' }}
              onClick={this.toggleEdit}
            />
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle>URL:</Card.Subtitle>
          <Card.Text>
            <a href={feed.url}>{feed.url}</a>
          </Card.Text>
          <Card.Subtitle>Tags:</Card.Subtitle>
          <Card.Text>{feed.tags.join(' ')}</Card.Text>
        </Card.Body>
      </>
    );
  };

  editCard = feed => {
    return (
      <>
        <Card.Header>
          <Card.Title>
            {feed.displayName}
            <img
              src={back}
              width="24px"
              alt="back"
              style={{ float: 'right' }}
              onClick={this.toggleEdit}
            />
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="displayName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                autoFocus
                required
                type="text"
                value={this.state.displayName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="url">
              <Form.Label>URL:</Form.Label>
              <Form.Control
                required
                type="url"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="tags">
              <Form.Label>Tags:</Form.Label>
              <Form.Control
                type="text"
                value={this.state.tags}
                onChange={this.handleChange}
              />
            </Form.Group>
            {!this.state.loading ? (
              <Button variant="secondary" type="submit">
                Submit
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
        </Card.Body>
      </>
    );
  };

  componentDidMount() {
    const { feed } = this.props;

    this.setState({
      displayName: feed.displayName,
      url: feed.url,
      tags: feed.tags,
    });
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  patchFeed = feed => {
    return API.put('jrss-api', `/feeds/${this.props.feed.feedId}`, {
      body: feed,
    });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async e => {
    const { url, displayName, tags } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await this.patchFeed({
        displayName: displayName,
        url: url,
        tags: tags.split(',').map(tag => tag.trim()),
      });
      navigate('/');
    } catch (error) {
      alert(error);
      this.setState({ isLoading: false });
    }
  };
}

export default FeedCard;
