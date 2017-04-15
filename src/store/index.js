import { createStore, combineReducers } from 'redux';

import { reshapeNewsData } from '../util/dataTransformations';
import news from '../data.json';

const store = createStore(
  combineReducers({
    news: () => reshapeNewsData(news.results),
    searchTerm: () => '',
    bookmarks: () => [],
  })  
);

export default store;