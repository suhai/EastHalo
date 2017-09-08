import {combineReducers} from 'redux';
import errorsReducer from './error_reducer';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';
import CommentReducer from './comment_reducer';

const rootReducer = combineReducers({
	session: SessionReducer,
	errors: errorsReducer,
  users: UserReducer,
	search: SearchReducer,
	comments: CommentReducer
});

export default rootReducer;