import {combineReducers} from 'redux';
import errorsReducer from './error_reducer';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';
import CourseReducer from './course_reducer';
import DepartmentReducer from './department_reducer';
import CommentReducer from './comment_reducer';
// import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	session: SessionReducer,
	errors: errorsReducer,
  users: UserReducer,
	search: SearchReducer,
	// form: formReducer,
	courses: CourseReducer,
	departments: DepartmentReducer,
	comments: CommentReducer
});

export default rootReducer;