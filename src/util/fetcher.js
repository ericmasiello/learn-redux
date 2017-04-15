function fetcher(url, params) {
  return fetch(url)
    .then(result => result.json());
}

export default fetcher;