import { LOAD_NEWS, SEARCH_NEWS } from '../config/actions';
import { reshapeNewsData } from '../util/dataTransformations';
import news from '../data.json';

export function loadNews() {
  return {
    type: LOAD_NEWS,
    payload: reshapeNewsData(news.results),
  };
}

export function searchNews(event) {
  return {
    type: SEARCH_NEWS,
    payload: event.target.value,
  };
}
