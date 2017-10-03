import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPostComment, editComment, deleteComment } from '../../../actions/comment_actions';
import { fetchUser } from '../../../actions/user_actions';
import CommentShow from './CommentShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	comments: state.Comments
});

const mapDispatchToProps = dispatch => ({
	fetchPostComment: id => dispatch(fetchPostComment(id)),
	fetchUser: id => dispatch(fetchUser(id)),
  editComment: (comment, id) => dispatch(editComment(comment, id)),
	deleteComment: id => dispatch(deleteComment(id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentShow));