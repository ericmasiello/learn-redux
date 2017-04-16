import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import newsReducer from '../reducers/newsReducer';
import searchTermReducer from '../reducers/searchTermReducer';
import isLoadingReducer from '../reducers/isLoadingReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    isLoading: isLoadingReducer,
    news: newsReducer,
    searchTerm: searchTermReducer,
    bookmarks: () => [],
  }),
  composer(
    applyMiddleware(logger, thunk),
  ),
);

export default store;
