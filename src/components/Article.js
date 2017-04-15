import React from 'react';
import PropTypes from 'prop-types';
import ArticleHero from './ArticleHero';
import './Article.css';

function Article(props) {
  const {
    title,
    description,
    url,
    author,
    location,
    date,
    imageUrl,
    index,
    accentColors,
    isBookmarked,
  } = props;

  const accentColor = accentColors[
    index % accentColors.length
  ];

  return (
    <article className="article">
      <ArticleHero
        imageUrl={imageUrl}
        title={title}
        accentColor={accentColor}
        isBookmarked={isBookmarked}
      />
      <div>{author}</div>
      <div>{date} {location}</div>
      <p>{description} <a href={url}>Read More</a></p>
    </article>
  )
}

Article.propTypes = {
  index: PropTypes.number,
  accentColors: PropTypes.arrayOf(PropTypes.string),
  isBookmarked: PropTypes.bool,
  description: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  title: ArticleHero.propTypes.title,
  imageUrl: ArticleHero.propTypes.imageUrl,
};

Article.defaultProps = {
  index: 0,
  accentColors: ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'],  
};

export default Article;