import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, editPost, deletePost } from '../../../actions/post_actions';
import { fetchPostComments, editComment, deleteComment } from '../../../actions/comment_actions';
import PostShow from './PostShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	posts: state.posts
});

const mapDispatchToProps = dispatch => ({
	fetchPost: id => dispatch(fetchPost(id)),
  editPost: (post, id) => dispatch(editPost(post, id)),
	deletePost: id => dispatch(deletePost(id)),
	fetchPostComments: (id) => dispatch(fetchPostComments(id)),
	editComment: (id) => dispatch(editComment(id)),
	deletetComment: (id) => dispatch(deleteComment(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow));