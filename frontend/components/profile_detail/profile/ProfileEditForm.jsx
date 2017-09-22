import React from 'react';
import { values, merge } from 'lodash';

class ProfileEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			fname: '',
			lname: '',
			password: '',
			email: '',
			bio: '',
			dob: '',
			gender: '',
			profile_image_url: '',
			typeOption1: 'NULL',
			typeOption2: 'Student',
			typeOption3: 'Professor',
			genderOption1: 'Other',
			genderOption2: 'Male',
			genderOption3: 'Female',
			isAdminOption1: 'DEFAULT',
			isAdminOption2: 'TRUE',
			isAdminOption3: 'FALSE'
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editUser = this.editUser.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};


	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editUser();
		}
	};

	redirectPath() {
		window.location.hash = `/${this.props.currentUser.username}/profile`;
	};

	editUser() {
		let data = {
			user: {
				username: this.state.username,
				fname: this.state.fname,
				lname: this.state.lname,
				password: this.state.password,
				email: this.state.email,
				dob: this.state.dob,
				bio: this.state.bio,
				gender: this.state.gender,
				profile_image_url: this.state.profile_image_url,
			}
		};
		this.setState({
			username: '',
			fname: '',
			lname: '',
			email: '',
			bio: '',
			dob: '',
			gender: '',
			profile_image_url: ''
		});

		this.props.editUser(data, this.props.currentUser.id);
		this.redirectPath();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.users).length > 0 ?
		this.setState({
			id: props.match.params.id,
			username: props.users[props.match.params.id].username,
			fname: props.users[props.match.params.id].fname,
			lname: props.users[props.match.params.id].lname,
			password: props.users[props.match.params.id].password,
			email: props.users[props.match.params.id].email,
			bio: props.users[props.match.params.id].bio,
			dob: props.users[props.match.params.id].dob,
			gender: props.users[props.match.params.id].gender,
			profile_image_url: props.users[props.match.params.id].profile_image_url
		}) :
		this.setState({
			username: '',
			fname: '',
			lname: '',
			email: '',
			bio: '',
			dob: '',
			gender: '',
			profile_image_url: ''
		});
	};


	render() {
		const {
			username,
			fname,
			lname,
			password,
			email,
			bio,
			dob,
			gender,
			profile_image_url,
			typeOption1,
			typeOption2,
			typeOption3,
			genderOption1,
			genderOption2,
			genderOption3,
			isAdminOption1,
			isAdminOption2,
			isAdminOption3,
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{username}</h2>
					<form className="form-style-9">
						<ul>
							<li>
								<input type="text" className="field-style field-split align-left" value={username} onChange={this.update('username')} placeholder="username" />
								<input type="password" className="field-style field-split align-right" value={password} onChange={this.update('password')} placeholder="Password" />
							</li>
							<li>
								<input type="text" className="field-style field-split align-left" value={fname} onChange={this.update('fname')} placeholder="First Name" />
								<input type="text" className="field-style field-split align-right" value={lname} onChange={this.update('lname')} placeholder="Last Name" />
							</li>
							<li>
								<input type="date" className="field-style field-split align-left" value={dob} onChange={this.update('dob')} placeholder="DOB" />
								<input type="email" className="field-style field-split align-right" value={email} onChange={this.update('email')} placeholder="Email" />
							</li>
							<li>
								<input type="url" className="field-style field-split align-left" value={profile_image_url} onChange={this.update('profile_image_url')} placeholder="Image URL" />
								<select className="field-style field-split align-right" value={gender} onChange={this.update('gender')} >
									<option value={genderOption1} >Gender</option>
									<option value={genderOption2} >Male</option>
									<option value={genderOption3} >Female</option>
								</select>
							</li>
							<li>
								<textarea className="field-style" value={bio} onChange={this.update('bio')} placeholder="Bio"></textarea>
							</li>
							<li>
								<input type="submit" value="Save" onClick={this.editUser} />
								<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
							</li>
						</ul>
					</form>
			</div>
		)
	};
};

export default ProfileEditForm;