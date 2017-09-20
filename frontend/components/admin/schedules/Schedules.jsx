import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Schedule from './Schedule';

class Schedules extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchUsers();
	};

  render() {
		let schedules = values(this.props.users).filter(function(person) {
			return person.type == 'Student' || person.type == 'Professor';
		})
		.map((user, idx) => <Schedule key={idx} currentUser={this.props.currentUser} user={user}/>)


    return (
      <div className=''>
				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">User ID</th>
							<th scope="col">FName</th>
							<th scope="col">LName</th>
						</tr>
					</thead>

					<tbody>
						{schedules}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default Schedules;