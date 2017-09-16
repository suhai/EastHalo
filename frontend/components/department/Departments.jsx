import React from 'react';
import { values, merge } from 'lodash';

class Departments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	};

	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchCourses();
		this.props.fetchDepartments();
	};


	render() {
		let departments = values(this.props.departments).map((dept, idx) => (
			<tr key={idx}>
				<td>{dept.id}</td>
				<td>{dept.name}</td>
			</tr>
		));

		return (
			<div className=''>
				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">Dept. ID</th>
							<th scope="col">Dept. Name</th>
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
