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
			<div className='pages'>
				<h1 className='table-h1'>My Friends</h1>
        <div className="tbl-header2">
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
			</div>
		);
	}
}

export default Friends;

