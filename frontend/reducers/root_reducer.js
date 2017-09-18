import {combineReducers} from 'redux';
import errorsReducer from './error_reducer';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';
import CourseReducer from './course_reducer';
import DepartmentReducer from './department_reducer';
import CommentReducer from './comment_reducer';
import CourseEnrollmentReducer from './course_enrollment_reducer';
import MealReducer from './meal_reducer';
import BookReducer from './book_reducer';
import GradeLetterReducer from './grade_letter_reducer';
import FriendshipReducer from './friendship_reducer';
import GradeReducer from './grade_reducer';
// import PostReducer from './post_reducer';

const rootReducer = combineReducers({
	session: SessionReducer,
	errors: errorsReducer,
  users: UserReducer,
	search: SearchReducer,
	courses: CourseReducer,
	meals: MealReducer,
	books: BookReducer,
	course_enrollments: CourseEnrollmentReducer,
	departments: DepartmentReducer,
	comments: CommentReducer,
	grade_letters: GradeLetterReducer,
	friendships: FriendshipReducer,
	grades: GradeReducer,
	// posts: PostReducer
});

export default rootReducer;