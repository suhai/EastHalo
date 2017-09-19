import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Message from './Message';

class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};

	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/messages/messageform`;
	};

	componentDidMount() {
		this.props.fetchMessages();
	};

	render() {
		let messageList = values(this.props.messages);
		let messages = messageList.map((message, idx) => (
			<Message key={idx} message={message} currentUser={this.props.currentUser}/>
		));

		return (
			<div className=''>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							{/* <th scope="col">Post ID</th> */}
							<th scope="col">Sender</th>
							<th scope="col">Email</th>
							<th scope="col">Subject</th>
							<th scope="col">Excerpt</th>
						</tr>
					</thead>

					<tbody>
						{messages}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default Messages;
