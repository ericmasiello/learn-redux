import { connect } from 'react-redux';
import { loadNews } from '../actions/newsActions';
import NewsArchive from '../components/NewsArchive';
import { searchNewsSelector } from '../selectors/newsSelectors';

function mapStateToProps(state) {
  return {
    news: searchNewsSelector(state),
    isLoading: state.isLoading,
  };
}

const NewsArchiveContainer = connect(mapStateToProps, { loadNews })(NewsArchive);

export default NewsArchiveContainer;
