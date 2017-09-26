import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Friendship from './Friendship';

class Friendships extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchFriendships();
	};

  render() {
		let friendshipList = values(this.props.friendships);
		let friendships = friendshipList.map((friendship, idx) => (
			<Friendship key={idx} friendship={friendship} deleteFriendship={this.props.deleteFriendship} currentUser={this.props.currentUser}/>
		));

    return (
      <div className=''>

			<h1 className='table-h1'>Users Table</h1>
			<div className="tbl-header">
				<table cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th scope="col">Friendship ID</th>
							<th scope="col">friender</th>
							<th scope="col">friended</th>
							<th scope="col">Delete</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{friendships}
						</tbody>
					</table>
				</div>
			</div>
    );
  }
}

export default Friendships;