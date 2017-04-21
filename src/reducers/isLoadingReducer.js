import { IS_LOADING, LOAD_NEWS } from '../config/actions';

function isLoadingReducer(state = false, action = {}) {
  switch (action.type) {
    case IS_LOADING:
      return true;
    case LOAD_NEWS:
      return false;
    default:
      return state;
  }
}

export default isLoadingReducer;
