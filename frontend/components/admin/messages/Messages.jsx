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

			<h1 className='table-h1'>Users Table</h1>
			<div className="tbl-header">
				<table cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							{/* <th scope="col">Post ID</th> */}
							<th scope="col">Sender</th>
							<th scope="col">Email</th>
							<th scope="col">Subject</th>
							<th scope="col">Excerpt</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{messages}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Messages;