import React, { Component } from 'react';
import { Router } from '@reach/router';
import NavigationBar from './Components/NavigationBar';
import FeedView from './Components/FeedView';
import ManageFeeds from './Components/ManageFeeds';
import AddFeed from './Components/AddFeed';
import _ from 'lodash';
import { rssParser } from './utilities';
import ArticleModal from './Components/ArticleModal';

class App extends Component {
  state = {
    feeds: {
      time: {
        displayName: 'time',
        url: 'https://feeds.feedburner.com/time/topstories?format=xml',
        tags: ['politics'],
      },
      guardian: {
        displayName: 'Guardian',
        url: 'https://www.theguardian.com/world/rss',
        tags: ['politics'],
      },
      verge: {
        displayName: 'Verge',
        url: 'https://www.theverge.com/rss/index.xml',
        tags: ['tech'],
      },
      jezebel: {
        displayName: 'Jezebel',
        url: 'https://jezebel.com/rss',
        tags: ['culture'],
      },
      stereogum: {
        displayName: 'Stereogum',
        url: 'https://www.stereogum.com/feed/',
        tags: ['music', 'culture'],
      },
    },
    articles: [],
    loading: true,
    tags: ['music', 'culture', 'tech', 'politics'],
    modalVisible: false,
    modalArticle: null,
  };

  render() {
    const {
      feeds,
      tags,
      articles,
      loading,
      modalVisible,
      modalArticle,
    } = this.state;
    return (
      <main className="App">
        <header className="App-header" />
        <NavigationBar feeds={feeds} tags={tags} />
        {modalVisible ? (
          <ArticleModal
            article={modalArticle}
            closeModal={this.closeModal}
            modalVisible={modalVisible}
          />
        ) : null}
        <Router>
          <FeedView
            path="/"
            articles={articles}
            loading={loading}
            openModal={this.openModal}
          />
          <FeedView
            path="/feeds/:feedName"
            articles={articles}
            loading={loading}
            openModal={this.openModal}
          />
          <FeedView
            path="/tags/:tagName"
            articles={articles}
            loading={loading}
            openModal={this.openModal}
          />
          <ManageFeeds
            path="/settings/managefeeds"
            feeds={feeds}
            unsubscribeFromFeed={this.unsubscribeFromFeed}
            deleteTag={this.deleteTag}
            addTag={this.addTag}
          />
          <AddFeed
            path="/settings/addfeed"
            subscribeToFeed={this.subscribeToFeed}
          />
        </Router>
      </main>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    this.saveState();
    if (JSON.stringify(this.state) !== JSON.stringify(prevState))
      this.fetchFeeds();
  }

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('savedState'));
    if (savedState) {
      savedState.modalVisible = false;
      this.setState(savedState);
    }
    this.fetchFeeds();
  }

  saveState = () => {
    localStorage.setItem('savedState', JSON.stringify(this.state));
  };

  fetchFeeds = () => {
    const feeds = this.cloneFeeds();
    return Promise.all(
      Object.keys(feeds).map(feedName => {
        return rssParser(feeds, feedName)
          .then(articles => {
            return (feeds[feedName].articles = articles);
          })
          .catch(err =>
            console.log(
              `error caused by feed: ${feedName}\nInside fetchFeeds() .map:\n${err}`,
            ),
          );
      }),
    )
      .then(articles => {
        const flattenedAndSortedArticles = _.flatten(articles).sort((a, b) =>
          a.isoDate < b.isoDate ? 1 : -1,
        );
        return this.setState({
          articles: flattenedAndSortedArticles,
          loading: false,
        });
      })
      .catch(err => console.log(`fetchFeeds() error outside .map`, err));
  };

  subscribeToFeed = (feedName, feedUrl, feedTags = []) => {
    const formattedName = feedName.replace(/\s/g, '_').toLowerCase();
    const feeds = this.cloneFeeds();
    feeds[formattedName] = {
      displayName: feedName,
      url: feedUrl,
      tags: feedTags,
    };
    const newTags = this.cloneTags();
    feedTags.forEach(tag => {
      if (!newTags.includes(tag.trim())) newTags.push(tag.trim());
    });
    this.setState({ feeds, tags: newTags });
  };

  unsubscribeFromFeed = async feedName => {
    const newFeeds = this.cloneFeeds();
    delete newFeeds[feedName];
    const filteredArticles = this.state.articles.filter(
      article => article.feedName !== feedName,
    );
    await this.setState({ feeds: newFeeds, articles: filteredArticles });
    this.removeRedundantTags();
  };

  deleteTag = async (feedName, deletedTag) => {
    const feeds = this.cloneFeeds();
    feeds[feedName].tags = feeds[feedName].tags.filter(
      tag => tag !== deletedTag,
    );
    await this.setState({ feeds });
    this.removeRedundantTags();
  };

  addTag = (feedName, newTag) => {
    const feeds = this.cloneFeeds();
    const tags = this.cloneTags();
    const tag = newTag.toLowerCase();
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
    if (!feeds[feedName].tags.includes(tag)) {
      feeds[feedName].tags.push(tag);
    }
    this.setState({ feeds, tags });
  };

  cloneFeeds = () => {
    return JSON.parse(JSON.stringify(this.state.feeds));
  };

  cloneTags = () => {
    return JSON.parse(JSON.stringify(this.state.tags));
  };

  removeRedundantTags = () => {
    const currentlyUsedTags = _.flatten(
      Object.keys(this.state.feeds).map(feed => this.state.feeds[feed].tags),
    );
    const filteredTags = this.cloneTags().filter(tag =>
      currentlyUsedTags.includes(tag),
    );
    this.setState({ tags: filteredTags });
  };

  openModal = article => {
    this.setState({ modalVisible: true, modalArticle: article });
  };

  closeModal = () => {
    this.setState({ modalVisible: false, modalArticle: null });
  };
}

export default App;
