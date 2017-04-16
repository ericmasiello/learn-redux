import { connect } from 'react-redux';
import { loadNews } from '../actions/newsActions';
import NewsArchive from '../components/NewsArchive';

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

const NewsArchiveContainer = connect(mapStateToProps, { loadNews })(NewsArchive);

export default NewsArchiveContainer;
