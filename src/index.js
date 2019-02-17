import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/loading-component.css';
import './CSS/index.css';
import './CSS/main.css';

import Amplify from 'aws-amplify';

const {
  cognito: { CREGION, USER_POOL_ID, APP_CLIENT_ID, IDENTITY_POOL_ID },

  apiGateway: { AREGION, URL },
} = require('./config');

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: CREGION,
    userPoolId: USER_POOL_ID,
    identityPoolId: IDENTITY_POOL_ID,
    userPoolWebClientId: APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'jrss-api',
        endpoint: URL,
        region: AREGION,
      },
    ],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
