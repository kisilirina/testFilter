import {combineReducers} from 'redux'
import foundUsersReducer from './foundUsersReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  foundUsers: foundUsersReducer,
})

export default rootReducer;
