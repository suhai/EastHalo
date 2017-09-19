import { connect } from 'react-redux';
import { createMessage, fetchMessages } from '../../../actions/message_actions';
import MessageForm from './MessageForm';

const mapStateToProps = (state) => ({
	messages: state.messages
});

const mapDispatchToProps = dispatch => ({
	createMessage: (data) => dispatch(createMessage(data)),
	fetchMessages: () => dispatch(fetchMessages())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageForm);