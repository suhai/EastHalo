import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Admin from './Admin';
import { createBook, fetchBooks, deleteBook, editBook } from '../../actions/book_actions';
import { createMeal, fetchMeals, deleteMeal, editMeal } from '../../actions/meal_actions';
import { createCourse, fetchCourses, deleteCourse, editCourse } from '../../actions/course_actions';
import { createDepartment, fetchDepartments, deleteDepartment, editDepartment } from '../../actions/department_actions';


const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	users: state.users,
	posts: state.posts,
	comments: state.comments,
	books: state.books,
	courses: state.courses,
	meals: state.meals,
	courseEnrollments: state.courseEnrollments,
	departments: state.departments,
});

const mapDispatchToProps = dispatch => ({
	createBook: data => dispatch(createBook(data)),
	fetchBooks: () => dispatch(fetchBooks()),
	editBook: id => dispatch(editBook(id)),
	deleteBook: id => dispatch(deleteBook(id)),
	createMeal: data => dispatch(createMeal(data)),
	fetchMeals: () => dispatch(fetchMeals()),
	editMeal: id => dispatch(editMeal(id)),
	deleteMeal: id => dispatch(deleteMeal(id)),
	createCourse: data => dispatch(createCourse(data)),
	fetchCourses: () => dispatch(fetchCourses()),
	editCourse: id => dispatch(editCourse(id)),
	deleteCourse: id => dispatch(deleteCourse(id)),
	createDepartment: data => dispatch(createDepartment(data)),
	fetchDepartments: () => dispatch(fetchDepartments()),
	fetchDepartment: id => dispatch(fetchDepartment(id)),
	editDepartment: id => dispatch(editDepartment(id)),
	deleteDepartment: (id) => dispatch(deleteDepartment(id)),
	
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin));