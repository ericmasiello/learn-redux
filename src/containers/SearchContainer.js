import { connect } from 'react-redux';
import { searchNews } from '../actions/newsActions';
import { bindActionCreators } from 'redux';
import Search from '../components/Search';

function mapStateToProps(state) {
  return {
    value: state.searchTerm,
  };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onSearch: searchNews
  }, dispatch)
);

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;