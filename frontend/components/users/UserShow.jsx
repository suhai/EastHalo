import React from 'react';
import { values, merge } from 'lodash';

class UserShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			color: ''
		};
		this.editUser = this.editUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.addFriend = this.addFriend.bind(this);
		this.dropFriend = this.dropFriend.bind(this);
		this.toggleFriendship = this.toggleFriendship.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchUser(id);
		this.props.fetchFriendships();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.users).length > 0 ?
			this.setState({
				user: props.users[props.match.params.id]
			}) :
			this.setState({
				user: {}
			});

			let targetFriendship = values(this.props.friendships).find(friendship => {
				return (friendship.friend_id == this.props.match.params.id) 
			});
			!!targetFriendship ?
			this.setState({
				friendship_status: 'unFriend',
				color: 'delete'
			}) :
			this.setState({
				friendship_status: 'Add Friend',
				color: 'add'
			})
	}

	editUser() {
		window.location.hash = `/${this.props.currentUser.username}/users/edit/${this.props.match.params.id}`;
	};

	deleteUser() {
		let id = this.props.match.params.id;
		this.props.deleteUser(id)
		window.location.hash = `/${this.props.currentUser.username}/users`;
	};

	addFriend() {
		const { id: friend_id } = this.state.user;
		const { id: user_id } = this.props.currentUser;
		let data = {
			friendship: {
				user_id,
				friend_id
			}
		};

		if (user_id !== undefined && friend_id !== undefined) {
			this.props.createFriendship(data);
		}
	};

	dropFriend() {
		let targetFriendship = values(this.props.friendships).find(friendship => {
			return (friendship.friend_id == this.props.match.params.id) 
		});

		if (targetFriendship !== undefined) {
			this.props.deleteFriendship(targetFriendship.id);
		} 
	};

	toggleFriendship() {
		this.props.friendships[this.props.match.params.id] ?
		this.dropFriend() : this.addFriend()
	};


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

		const {
			friendship_status,
			color
		} = this.state;

		let addableUser = this.props.match.params.id == this.props.currentUser.id ?
			<div>{`Hi ${this.props.currentUser.username}`}</div> :
			<div className='grouped-buttons'>
				<button className={`btn ${color}`}  onClick={this.toggleFriendship}>{friendship_status}</button>	
			</div>
			

		return (
			<main className='user-page'>
				<div className="img-gallery" onClick={this.showUser}>
					<div className="gallery">
						<img src={profile_image_url} alt={username} />
					</div>
				</div>
				<hr/>
				<div>
					<div className='course-header'>
						{addableUser}
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