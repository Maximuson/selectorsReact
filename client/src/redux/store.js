import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsReducer from './posts/postsReducer';

import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const middleware = [ReduxThunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
