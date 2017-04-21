import { LOAD_NEWS } from '../config/actions';

function newsReducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD_NEWS:
      return action.payload;
    default:
      return state;
  }
}

export default newsReducer;
