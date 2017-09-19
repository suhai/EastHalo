import * as APIUtil from '../utils/message_api_utils';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const removeMessage = message => ({
  type: REMOVE_MESSAGE,
  message
});

//-----------------------------------------------------------------------------
// async actions
export const createMessage = data => dispatch => (
  APIUtil.createMessage(data)
  .then(message =>  dispatch(receiveMessage(message)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchMessages = () => dispatch => (
  APIUtil.fetchMessages()
    .then(messages => dispatch(receiveMessages(messages)))
);


export const fetchMessage = id => dispatch => (
	APIUtil.fetchMessage(id)
    .then(message => dispatch(receiveMessage(message)))
);

export const editMessage = (Message, id) => dispatch => (
  APIUtil.updateMessage(message, id)
    .then(editedMessage => dispatch(receiveMessage(editedMessage)))
);

export const deleteMessage = id => dispatch => (
  APIUtil.deleteMessage(id)
  .then(message => dispatch(removeMessage(message)))
);