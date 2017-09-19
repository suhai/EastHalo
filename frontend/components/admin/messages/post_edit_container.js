import { connect } from 'react-redux';
import { fetchPost, fetchPosts, editPost } from '../../../actions/post_actions';
import { fetchUsers } from '../../../actions/user_actions';
import PostEditForm from './PostEditForm';

const mapStateToProps = (state) => ({
	posts: state.posts,
	users: state.users,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchPosts: () => dispatch(fetchPosts()),
	fetchPost: (id) => dispatch(fetchPost(id)),
	editPost: (data, id) => dispatch(editPost(data, id)),
	fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PostEditForm);