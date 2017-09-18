import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import User from './User';

class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchUsers();
	};

	render() {
		let userList = values(this.props.users);
		let users = userList.map((user, idx) => (
			<User key={idx} user={user} currentUser={this.props.currentUser} />
		));

		return (
			<div className=''>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Username</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">DOB</th>
							<th scope="col">Email</th>
							<th scope="col">Type</th>
							<th scope="col">Gender</th>
							<th scope="col">Balance</th>
						</tr>
					</thead>

					<tbody>
						{users}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default Users;
