import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../../../actions/post_actions';
import { fetchUsers } from '../../../actions/user_actions';
import PostForm from './PostForm';

const mapStateToProps = (state) => ({
	posts: state.posts,
	users: state.users,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createPost: (data) => dispatch(createPost(data)),
	fetchPosts: () => dispatch(fetchPosts()),
	fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostForm);