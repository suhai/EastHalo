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
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
							<tr>
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Phone</th>
								<th scope="col">Gender</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
							{friends}
						</tbody>
					</table>
				</div>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default Friends;

