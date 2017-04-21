import { LOAD_NEWS } from '../config/actions';
import { reshapeNewsData } from '../util/dataTransformations';
import news from '../data.json';

function loadNews() {
  return {
    type: LOAD_NEWS,
    payload: reshapeNewsData(news.results),
  };
}

export default loadNews;
