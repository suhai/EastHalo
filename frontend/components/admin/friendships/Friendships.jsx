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

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Friendship ID</th>
							<th scope="col">friender</th>
							<th scope="col">friended</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>

					<tbody>
						{friendships}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default Friendships;