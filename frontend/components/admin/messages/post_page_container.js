import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost, fetchPosts, deletePost, editPost } from '../../../actions/post_actions';
import Posts from './Posts';

const mapStateToProps = (state, ownProps) => ({
	posts: state.posts,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createPost: data => dispatch(createPost(data)),
	fetchPosts: () => dispatch(fetchPosts()),
	editPost: id => dispatch(editPost(id)),
  deletePost: id => dispatch(deletePost(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts));