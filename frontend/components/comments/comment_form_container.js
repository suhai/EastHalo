import { connect } from 'react-redux';
import { makeComment, fetchComments } from '../../actions/comment_actions';
import { fetchPosts } from '../../actions/post_actions';
import CommentForm from './CommentForm';

const mapStateToProps = (state) => ({
	comments: state.comments,
	posts: state.posts,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	makeComment: (data) => dispatch(makeComment(data)),
	fetchComments: () => dispatch(fetchComments()),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentForm);