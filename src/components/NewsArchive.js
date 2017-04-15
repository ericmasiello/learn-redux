import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import './NewsArchive.css';

function NewsArchive(props) {
  const { news } = props;
  
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
  )
}

NewsArchive.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape(Article.propTypes))
};

NewsArchive.defaultProps = {
  news: [],
};

export default NewsArchive;