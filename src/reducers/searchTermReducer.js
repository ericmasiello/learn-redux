import { SEARCH_NEWS } from '../config/actions';

function searchTermReducer(state = '', action = {}) {
  switch (action.type) {
    case SEARCH_NEWS:
      return action.payload;
    default:
      return state;
  }
}

export default searchTermReducer;