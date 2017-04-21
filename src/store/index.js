import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import newsReducer from '../reducers/newsReducer';
import logger from 'redux-logger';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    news: newsReducer,
    searchTerm: () => '',
    bookmarks: () => [],
  }),
  composer(
    applyMiddleware(logger),
  ),
);

export default store;