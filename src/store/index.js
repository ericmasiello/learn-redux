import { createStore, combineReducers, applyMiddleware } from 'redux';
import newsReducer from '../reducers/newsReducer';
import logger from 'redux-logger';

const store = createStore(
  combineReducers({
    news: newsReducer,
    searchTerm: () => '',
    bookmarks: () => [],
  }),
  applyMiddleware(logger),
);

export default store;