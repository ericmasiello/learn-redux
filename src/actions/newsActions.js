import { LOAD_NEWS, IS_LOADING, SEARCH_NEWS } from '../config/actions';
import { reshapeNewsData } from '../util/dataTransformations';
import nytFetch from '../util/nytFetch';

export function loadNews() {
  return function(dispatch) {
    dispatch({
      type: IS_LOADING,
    });

    nytFetch('technology')
    .then(news => {
      dispatch({
        type: LOAD_NEWS,
        payload: reshapeNewsData(news.results),
      });
    })
    .catch(err => console.log('There was an error', err))
  }
}

export function searchNews(event) {
  return {
    type: SEARCH_NEWS,
    payload: event.target.value,
  };
}
