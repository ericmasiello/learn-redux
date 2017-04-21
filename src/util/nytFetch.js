import { API_KEY } from '../config/apikey';

function nytFetch(endpoint, params) {
  return fetch(`http://api.nytimes.com/svc/topstories/v2/${endpoint}.json?api-key=${API_KEY}`)
    .then(result => result.json());
}

export default nytFetch;