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
			<Department key={idx} department={department} deleteDepartment={this.props.deleteDepartment} editDepartment={this.props.editDepartment} currentUser={this.props.currentUser}/>
		));

    return (
      <div className='pages'>
				<div><button className='btn create' onClick={this.renderForm}>Create Department</button></div>

				<h1 className='table-h1'>Departments Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">Department Name</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{departments}
						</tbody>
					</table>
				</div>
			</div>
    );
  }
}

export default Departments;