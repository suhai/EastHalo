import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMessage, fetchMessages, deleteMessage } from '../../../actions/message_actions';
import MessageShow from './MessageShow';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	messages: state.messages
});

const mapDispatchToProps = dispatch => ({
	createMessage: (data) => dispatch(createMessage(data)),
	fetchMessage: id => dispatch(fetchMessage(id)),
	fetchMessages: () => dispatch(fetchMessages()),
	deleteMessage: id => dispatch(deleteMessage(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageShow));