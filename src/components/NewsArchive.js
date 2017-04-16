import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './NewsArchive.css';

class NewsArchive extends Component {
  componentDidMount() {
    this.props.loadNews();
  }

  render() {
    const { news, isLoading } = this.props;
    if (isLoading) {
      return (
        <div className="loading">Loading...</div>
      );
    }
    
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
  isLoading: PropTypes.bool,
};

NewsArchive.defaultProps = {
  news: [],
  isLoading: false,
};

export default NewsArchive;
