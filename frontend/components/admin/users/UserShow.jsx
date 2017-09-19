import React from 'react';
import { values, merge } from 'lodash';

class UserShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
		this.editUser = this.editUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchUser(id);
	};

	editUser() {
		window.location.hash = `/admin/${this.props.currentUser.username}/users/edit/${this.props.match.params.id}`;
	};

	deleteUser() {
		let id = this.props.match.params.id;
		this.props.deleteUser(id)
		window.location.hash = `/admin/${this.props.currentUser.username}/users`;
	};

	componentWillReceiveProps(props) {
		Object.keys(props.users).length > 0 ?
			this.setState({
				user: props.users[props.match.params.id]
			}) :
			this.setState({
				user: {}
			});
	}

	render() {
		const {
			username,
			fname,
			lname,
			email,
			bio,
			gpa,
			profile_image_url,
			is_admin,
			type,
			gender,
			cash_balance
		} = this.state.user;

		return (
			<main className='user-page'>
				<div>
					<h2 className='course-header'>IMAGE</h2>
					<div className='grouped-buttons'>
						<button className='btn edit' onClick={this.editUser}>Edit User</button>
						<button className='btn delete' onClick={this.deleteUser}>Delete User</button>
					</div>
				</div>
				<hr />

				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col">User Information</th>
							<th scope="col">User Detail</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Username</td>
							<td>{username}</td>
						</tr>
						<tr>
							<td>First Name</td>
							<td>{fname}</td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td>{lname}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{email}</td>
						</tr>
						<tr>
							<td>Admin?</td>
							<td>{String(is_admin)}</td>
						</tr>
						<tr>
							<td>Type</td>
							<td>{type}</td>
						</tr>
						<tr>
							<td>Gender</td>
							<td>{gender}</td>
						</tr>
						<tr>
							<td>GPA</td>
							<td>{gpa}</td>
						</tr>
						<tr>
							<td>Account</td>
							<td>${cash_balance}</td>
						</tr>
						<tr>
							<td>Friends Link</td>
							<td>LINK</td>
						</tr>
						<tr>
							<td>Courses Link</td>
							<td>LINK</td>
						</tr>
						<tr>
							<td>Posts Link</td>
							<td>LINK</td>
						</tr>
						<tr>
							<td>Comments Link</td>
							<td>LINK</td>
						</tr>
						<tr>
							<td>Schedule Link</td>
							<td>LINK</td>
						</tr>
						<tr>
							<td>Transcript Link</td>
							<td>LINK</td>
						</tr>

					</tbody>
				</table>
				<div className='pull-left'>
					<p className='table-paragraph'>User Bio</p>
					<p>{bio}</p>
				</div>
			</main>
		);
	}
}

export default UserShow;