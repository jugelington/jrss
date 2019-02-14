# jrss

## Background

jrss is an RSS reader webapp built in [React](https://reactjs.org/) using [React Bootstrap](https://react-bootstrap.netlify.com/), [rss-parser](https://www.npmjs.com/package/rss-parser) and [html-react-parser](https://www.npmjs.com/package/html-react-parser).

Features include:

- Subscribing / unsubscribing to RSS feeds
- Assigning tags to feeds
- View all articles from all feeds at once
- View all articles from an individual feed
- View all articles from feeds with a particular tag.

A live version is hosted available at [jrss.netlify.com](https://jrss.netlify.com/).
You can find the backend repo [here](https://github.com/jugelington/jrss-api).

## Requirements

- [Node.js](https://nodejs.org/en/download/)
- A [Netlify](https://www.netlify.com/) account
- Netlify CLI
- A deployed [backend](https://github.com/jugelington/jrss-api).

## Setup Guide

In order to hook up the app to your API, you'll need to change a few of the methods to have your API's name instead of 'jrss-api'. These methods are:

- AddFeed.jsx - subscribeToFeed
- FeedCard.jsx - patchFeed and deleteFeed
- ManageFeeds.jsx - getFeeds

## Running

You can try out the app on a local server by running

```bash
$ npm start
```

If you are happy with how it looks, you can then build it

```bash
$ npm run build
```

And assuming you are deploying to Netlify, run

```bash
$ netlify deploy
```

Netlify will ask you for a build location; it will be './build'.
