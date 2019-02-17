import React, { Component } from 'react';
// utilities
import { API } from 'aws-amplify';
import ReactLoading from 'react-loading';
import { navigate } from '@reach/router';
// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
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
      <section className="add-feed-card">
        <h3 className="text-center">Add Feed</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-div">
            <label for="name">Name:</label>
            <input
              id="name"
              required
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-div">
            <label for="url">URL:</label>
            <input id="url" required type="url" onChange={this.handleChange} />
          </div>
          <div className="form-div">
            <label for="tags">Tags:</label>
            <input
              id="tags"
              type="text"
              onChange={this.handleChange}
              placeholder="Seperate tags with a comma"
            />
          </div>
          <br />
          {!loading ? (
            <div className="text-center">
              <Button variant="light" type="submit">
                Subscribe
              </Button>
            </div>
          ) : (
            <ReactLoading className="loading-bubbles" type={'bubbles'} />
          )}
        </form>
      </section>
    );
  }

  handleSubmit = async e => {
    const { url, name, tags } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await this.subscribeToFeed({
        displayName: name,
        url: url,
        tags: tags.split(',').map(tag => tag.trim()),
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
