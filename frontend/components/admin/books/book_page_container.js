import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBook, fetchBooks, deleteBook } from '../../../actions/book_actions';
import Books from './Books';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	books: state.books,
});

const mapDispatchToProps = dispatch => ({
	createBook: data => dispatch(createBook(data)),
	fetchBooks: () => dispatch(fetchBooks()),
  deleteBook: id => dispatch(deleteBook(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Books));