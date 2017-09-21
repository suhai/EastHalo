import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeComment, fetchAllComments, deleteComment, editComment } from '../../../actions/comment_actions';
import Comments from './Comments';

const mapStateToProps = (state, ownProps) => ({
	comments: state.comments,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	makeComment: data => dispatch(makeComment(data)),
	fetchAllComments: () => dispatch(fetchAllComments()),
	editComment: id => dispatch(editComment(id)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments));