import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './NewsArchive.css';

class NewsArchive extends Component {
  componentDidMount() {
    this.props.loadNews();
  }

  render() {
    const { news } = this.props;
    return (
      <ul className="news-archive">
        {news.map((article, i) => (
          <li key={article.title}>
            <Article
              {...article}
              index={i}
            />
          </li>
        ))}
      </ul>
    );
  }
}

NewsArchive.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape(Article.propTypes)),
  loadNews: PropTypes.func.isRequired,
};

NewsArchive.defaultProps = {
  news: [],
};

export default NewsArchive;
