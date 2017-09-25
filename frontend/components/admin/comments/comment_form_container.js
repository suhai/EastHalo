import { connect } from 'react-redux';
import { makeComment, fetchAllComments } from '../../../actions/comment_actions';
import CommentForm from './CommentForm';

const mapStateToProps = (state) => ({
	comments: state.comments,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	makeComment: (data, post_id) => dispatch(makeComment(data, post_id)),
	fetchAllComments: () => dispatch(fetchAllComments()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentForm);