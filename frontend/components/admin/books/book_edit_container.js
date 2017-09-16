import { connect } from 'react-redux';
import { fetchBook, fetchBooks, editBook } from '../../../actions/book_actions';
import BookEditForm from './BookEditForm';

const mapStateToProps = (state) => ({
	books: state.books,
});

const mapDispatchToProps = dispatch => ({
	fetchBooks: () => dispatch(fetchBooks()),
	fetchBook: (id) => dispatch(fetchBooks(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookEditForm);