import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './components/app'; 
// we dont need App for now
import reducers from './reducers';
import PostIndex from './components/post-index';
import PostNew from './components/new-post';
const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>

          <Route path="/posts/new" component={PostNew} />
          <Route path="/" component={PostIndex} />

        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
