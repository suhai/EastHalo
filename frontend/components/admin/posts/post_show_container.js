import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../../actions/user_actions';
import { createPost, fetchPost, fetchPosts, deletePost } from '../../../actions/post_actions';
import PostShow from './PostShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	posts: state.posts
});

const mapDispatchToProps = dispatch => ({
	createPost: (data) => dispatch(createPost(data)),
	fetchPost: id => dispatch(fetchPost(id)),
	fetchPosts: () => dispatch(fetchPosts()),
  editPost: (post, id) => dispatch(editPost(post, id)),
	deletePost: id => dispatch(deletePost(id)),
	fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow));