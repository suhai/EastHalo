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
				<h1 className='table-h1'>Users Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">User ID</th>
							<th scope="col">FName</th>
							<th scope="col">LName</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{schedules}
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

export default Schedules;