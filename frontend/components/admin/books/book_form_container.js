import { connect } from 'react-redux';
import { createBook, fetchBooks } from '../../../actions/book_actions';
import BookForm from './BookForm';

const mapStateToProps = (state) => ({
	books: state.Books,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createBook: (data) => dispatch(createBook(data)),
	fetchBooks: (data) => dispatch(fetchBooks()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookForm);