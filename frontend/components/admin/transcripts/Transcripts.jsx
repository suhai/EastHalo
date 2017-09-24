import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Transcript from './Transcript';

class Transcripts extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchUsers();
	};

  render() {
		let transcripts = values(this.props.users).filter(function(person) {
			return person.type == 'Student';
		})
		.map((user, idx) => <Transcript key={idx} currentUser={this.props.currentUser} user={user}/>)


    return (
      <div className=''>
				<h1 className='table-h1'>Users Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">Student ID</th>
							<th scope="col">FName</th>
							<th scope="col">LName</th>
							<th scope="col">GPA</th>
							<th scope="col">Cumm Credit</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{transcripts}
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

export default Transcripts;