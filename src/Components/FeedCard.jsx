import React, { Component } from 'react';
// react-bootstrap
import Card from 'react-bootstrap/lib/Card';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import InputGroup from 'react-bootstrap/lib/InputGroup';
// utilities
import { navigate } from '@reach/router';
import ReactLoading from 'react-loading';
import { API } from 'aws-amplify';
// images
import edit from '../Images/edit.png';
import back from '../Images/back.png';
// css
import '../CSS/cards.css';
import '../CSS/loading-component.css';

class FeedCard extends Component {
  state = {
    editing: false,
    displayName: '',
    url: '',
    tags: [],
    newTag: '',
    loading: false,
    deleting: false,
  };

  render() {
    const { feed } = this.props;
    const { editing } = this.state;

    return (
      <Card
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
              className="feed-card-title"
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
          <ButtonGroup>
            {feed.tags.map(tag => (
              <Button id={tag} variant="secondary" disabled>
                {tag}
              </Button>
            ))}
          </ButtonGroup>
        </Card.Body>
      </>
    );
  };

  editCard = feed => {
    const { displayName, url, tags, newTag } = this.state;
    return (
      <>
        <Card.Header>
          <Card.Title>
            {feed.displayName}
            <img
              src={back}
              width="24px"
              alt="back"
              className="feed-card-title"
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
                value={displayName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="url">
              <Form.Label>URL:</Form.Label>
              <Form.Control
                required
                type="url"
                value={url}
                onChange={this.handleChange}
              />
            </Form.Group>
            Tags:
            <br />
            <ButtonGroup>
              {tags.map(tag => (
                <OverlayTrigger
                  key={tag}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${tag}`}>
                      Remove <strong>{tag}</strong>
                    </Tooltip>
                  }
                >
                  <Button
                    id={tag}
                    variant={
                      this.state.tags.includes(tag) ? 'secondary' : 'danger'
                    }
                    onClick={this.deleteTag}
                  >
                    {tag}
                  </Button>
                </OverlayTrigger>
              ))}
            </ButtonGroup>
            <br />
            <Form.Group controlId="newTag">
              <Form.Label>New Tag:</Form.Label>

              <InputGroup>
                <Form.Control
                  type="text"
                  value={newTag}
                  onChange={this.handleChange}
                />{' '}
                <InputGroup.Append>
                  <Button onClick={this.addTag}>Add Tag</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            {!this.state.loading && !this.state.deleting ? (
              <ButtonGroup>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="danger" onClick={this.handleDelete}>
                  Unsubscribe
                </Button>
              </ButtonGroup>
            ) : (
              <ReactLoading className="loading-bubbles" type={'bubbles'} />
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

  deleteFeed = () => {
    return API.del('jrss-api', `/feeds/${this.props.feed.feedId}`);
  };

  handleDelete = async e => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to unsubscribe?');
    if (!confirmed) return;
    this.setState({ deleting: true });
    try {
      await this.deleteFeed();
      navigate('/');
    } catch (error) {
      alert(error);
      this.setState({ isDeleting: false });
    }
  };

  addTag = e => {
    e.preventDefault();
    const { tags, newTag } = this.state;
    tags.push(newTag);
    this.setState({ tags, newTag: '' });
  };

  deleteTag = e => {
    e.preventDefault();
    const removedTag = e.target.id;
    const { tags } = this.state;
    this.setState({ tags: tags.filter(tag => tag !== removedTag) });
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
        tags: tags.map(tag => tag.trim()),
      });
      navigate('/');
    } catch (error) {
      alert(error);
      this.setState({ isLoading: false });
    }
  };
}

export default FeedCard;
