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
				<h1 className='table-h1'>Users Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
							<tr>
								<th scope="col">Username</th>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Type</th>
								<th scope="col">Gender</th>
								<th scope="col">Account</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
							{users}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Users;
