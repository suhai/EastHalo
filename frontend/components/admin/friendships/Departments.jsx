import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Department from './Department';

class Departments extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};
	
	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/departments/departmentform`;
	};

	componentDidMount() {
		this.props.fetchDepartments();
	};

  render() {
		let departmentList = values(this.props.departments);
		let departments = departmentList.map((department, idx) => (
			<Department key={idx} department={department} deleteDepartment={this.props.deleteDepartment} currentUser={this.props.currentUser}/>
		));

    return (
      <div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Department</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Department Name</th>
							<th scope="col">Edit</th>
							<th scope="col">Delte</th>
						</tr>
					</thead>

					<tbody>
						{departments}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default Departments;