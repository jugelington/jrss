import React, { Component } from 'react';
// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
// utilities
import { navigate } from '@reach/router';
import ReactLoading from 'react-loading';
import { API } from 'aws-amplify';

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
    const { displayName, url, tags, editing, newTag } = this.state;

    return (
      <section className="feed-card box">
        <section className="feed-header">
          <h5 className="feed-name">{feed.displayName}</h5>
          <Button
            size="sm"
            variant="light"
            onClick={this.toggleEdit}
            className="feed-button"
          >
            Edit
          </Button>
        </section>
        {editing && (
          <section className="feed-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-div">
                <label for="displayName">Name:</label>
                <input
                  id="displayName"
                  autoFocus
                  required
                  type="text"
                  value={displayName}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="form-div">
                <label for="url">URL:</label>
                <input
                  required
                  id="url"
                  type="url"
                  value={url}
                  onChange={this.handleChange}
                />
              </div>
              <br />

              <div className="form-div">
                <label>Tags:</label>
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
                      variant="secondary"
                      onClick={this.deleteTag}
                    >
                      {tag}
                    </Button>
                  </OverlayTrigger>
                ))}
              </div>
              <div className="form-div">
                <label for="newTag">New Tag:</label>
                <input
                  id="newTag"
                  type="text"
                  value={newTag}
                  placeholder="add tag"
                  onChange={this.handleChange}
                />
                <Button onClick={this.addTag} variant="outline-light">
                  Add Tag
                </Button>
              </div>
              {!this.state.loading && !this.state.deleting ? (
                <>
                  <Button
                    variant="primary"
                    type="submit"
                    className="submit-btn"
                  >
                    Submit
                  </Button>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Warning: Irreversible!</Tooltip>}
                  >
                    <Button
                      variant="danger"
                      onClick={this.handleDelete}
                      className="delete-btn"
                    >
                      Delete
                    </Button>
                  </OverlayTrigger>
                </>
              ) : (
                <ReactLoading className="loading-bubbles" type={'bubbles'} />
              )}
            </form>
          </section>
        )}
      </section>
    );
  }

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
    e.preventDefault();
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
