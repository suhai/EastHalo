import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBook, editBook, deleteBook } from '../../../actions/book_actions';
import BookShow from './BookShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	books: state.books,
});

const mapDispatchToProps = dispatch => ({
  fetchBook: id => dispatch(fetchBook(id)),
  editBook: (book, id) => dispatch(editBook(book, id)),
	deleteBook: id => dispatch(deleteBook(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(BookShow));