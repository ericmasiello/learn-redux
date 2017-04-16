import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ArticleHero.css';

function ArticleHero(props) {
  const {
    isBookmarked,
    accentColor,
    title,
    imageUrl,
  } = props;

  return (
    <div
      className="article-hero"
      style={{
        'borderColor': accentColor,
      }}
    >
      <div
        className="article-hero__image"
        style={{
          'backgroundColor': accentColor,
          'backgroundImage': `url(${imageUrl})`
        }}
      />
      <h1 className="article-hero__title">{title}</h1>
      <svg className={classNames('bookmark', {
        'bookmark--selected': isBookmarked,
      })}>
        <use xlinkHref="#star"></use>
      </svg>
    </div>
  );
}

ArticleHero.propTypes = {
  isBookmarked: PropTypes.bool,
  accentColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

ArticleHero.defaultProps = {
  isBookmarked: false,
}

export default ArticleHero;