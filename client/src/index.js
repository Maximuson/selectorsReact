import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import './index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Route component={App} />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
