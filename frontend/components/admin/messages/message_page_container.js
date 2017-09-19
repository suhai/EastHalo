import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMessages, deleteMessage } from '../../../actions/message_actions';
import Messages from './Messages';

const mapStateToProps = (state, ownProps) => ({
	messages: state.messages,
	currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
	createMessage: data => dispatch(createMessage(data)),
	fetchMessages: () => dispatch(fetchMessages()),
  deleteMessage: id => dispatch(deleteMessage(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(Messages));