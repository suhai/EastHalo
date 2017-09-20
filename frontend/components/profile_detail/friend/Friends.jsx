import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Friend from './Friend';

class Friends extends React.Component {
	constructor(props) {
		super(props);
		
	};

	render() {
		let friends = values(this.props.currentUser.friends).map((friend, idx) => (
			<Friend key={idx} currentUser={this.props.currentUser} friend={friend} />
		));

		return (
			<div className=''>
				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Username</th>
							<th scope="col">Email</th>
							<th scope="col">Phone</th>
						</tr>
					</thead>

					<tbody>
						{friends}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default Friends;
