import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeComment, deleteComment, editComment } from '../../../actions/comment_actions';
import Comments from './Comments';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	makeComment: data => dispatch(makeComment(data)),
	editComment: id => dispatch(editComment(id)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments));