import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import benchesReducer from './benches_reducer';
import singleBenchReducer from './single_bench_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchesReducer,
  bench: singleBenchReducer,
});

export default entitiesReducer;
