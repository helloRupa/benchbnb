import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';
import loadingReducer from './loading_reducer';

export default combineReducers({
  filters: filterReducer,
  loading: loadingReducer,
});
