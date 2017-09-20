import { connect } from 'react-redux';
import { fetchComment, fetchComments, editComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchCourses } from '../../actions/course_actions';
import CommentEditForm from './CommentEditForm';

const mapStateToProps = (state) => ({
	courses: state.courses,
	users: state.users,
	comments: state.comments,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	fetchComments: () => dispatch(fetchComments()),
	fetchComment: (id) => dispatch(fetchComment(id)),
	editComment: (data, id) => dispatch(editComment(data, id)),
	fetchUsers: () => dispatch(fetchUsers()),
	fetchCourses: () => dispatch(fetchCourses()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentEditForm);