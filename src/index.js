import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Promise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
// import App from './components/app'; 
// we dont need App for now
import reducers from './reducers';
import PostIndex from './components/post-index';
const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/posts" component={PostIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
