import { connect } from 'react-redux';
import { createBook } from '../../../actions/book_actions';
import BookForm from './BookForm';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createBook: (data) => dispatch(createBook(data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BookForm);