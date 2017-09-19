import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.showMessage = this.showMessage.bind(this);
  }


  showMessage() {
		window.location.hash = `admin/${this.props.currentUser.username}/messages/${this.props.message.id}`;
	};


  render() {
		const { 
			sender, 
			email, 
			subject, 
			msg
		} = this.props.message;

    return (
			<tr onClick={this.showMessage}>
				<td>{sender}</td>
				<td>{email}</td>
				<td>{subject}</td>
				<td>{msg.slice(0,20)}</td>
			</tr>
    );
  }
}

export default Message;