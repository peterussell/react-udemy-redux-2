import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

/* ReduxPromise is a middleware. Middleware sits between the action creators
   and reducers, and intercepts the actions sent from the creators. It can
   then inspect and remove, modify, allow it to pass, or trigger some other
   action (kind of like iptables or some kind of proxy).

   Specifically, ReduxPromise will check the 'payload:' field of an action,
   and if it sees that field's value is a promise, it will stop the action
   from being dispatched to reducers until the promise is fulfilled.

   Once the request finishes, it dispatches a *new* action of the same type,
   but with a payload of the *resolved request*. */
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
