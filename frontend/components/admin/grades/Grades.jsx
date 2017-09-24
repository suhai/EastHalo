import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Grade from './Grade';

class Grades extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};

	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/grades/gradeform`;
	};

	componentDidMount() {
		this.props.fetchGrades();
	};

	render() {
		let gradeList = values(this.props.grades);
		let grades = gradeList.map((grade, idx) => (
			<Grade key={idx} grade={grade} currentUser={this.props.currentUser}/>
		));

		return (
			<div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create Grade</button></div>

				<h1 className='table-h1'>Users Table</h1>
        <div className="tbl-header">
          <table cellPadding={0} cellSpacing={0}>
						<thead>
						<tr>
							<th scope="col">Student</th>
							<th scope="col">Class</th>
							<th scope="col">Grade</th>
							<th scope="col">Units</th>
							<th scope="col">Professor</th>
							<th scope="col">Comment</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{grades}
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

export default Grades;
