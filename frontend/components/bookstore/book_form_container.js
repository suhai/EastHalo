import { connect } from 'react-redux';
import { createBook, fetchBooks } from '../../actions/book_actions';
import { fetchUsers } from '../../actions/user_actions';
import BookForm from './BookForm';

const mapStateToProps = (state) => ({
	meals: state.books,
	users: state.users,
});

const mapDispatchToProps = dispatch => ({
	createBook: (data) => dispatch(createBook(data)),
	fetchBooks: () => dispatch(fetchBooks()),
	fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookForm);