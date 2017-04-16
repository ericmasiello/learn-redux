import { createStore, combineReducers } from 'redux';
import newsReducer from '../reducers/newsReducer';

const store = createStore(
  combineReducers({
    news: newsReducer,
    searchTerm: () => '',
    bookmarks: () => [],
  })  
);

export default store;