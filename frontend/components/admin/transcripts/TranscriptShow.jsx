import React from 'react';
import { values, merge } from 'lodash';

class TranscriptShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		const id = this.props.match.params.id;
	};

	componentWillReceiveProps(props) {
		Object.keys(props.users).length > 0 ?
			this.setState({
				user: props.users[props.match.params.id]
			}) :
			this.setState({
				user: {}
			});
	}

	render() {
		const {
			id,
			fname,
			lname,
			gpa,
			dob,
			completed_course_credit,
			current_course_load,
			cash_balance,
			email,
			phone_number,
			grades
		} = this.state.user;

		return (
			<main className='user-page'>
				<div>
					<div className='grouped-buttons'>
						<button className='btn edit'>Now What</button>
					</div>
				</div>
				<hr />
				
				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col">Student Info</th>
							<th scope="col">Info Detail</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Student ID</td>
							<td>{id}</td>
						</tr>
						<tr>
							<td>First Name</td>
							<td>{fname}</td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td>{lname}</td>
						</tr>
						<tr>
							<td>GPA</td>
							<td>{gpa}</td>
						</tr>
						<tr>
							<td>D.O.B</td>
							<td>{dob}</td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{email}</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td>{phone_number}</td>
						</tr>
						<tr>
							<td>Course load</td>
							<td>{current_course_load}</td>
						</tr>
						<tr>
							<td>Cummulative Credit</td>
							<td>{completed_course_credit}</td>
						</tr>
						<tr>
							<td>Cash Balance</td>
							<td>${cash_balance}</td>
						</tr>
					</tbody>
				</table>
				<div className='pull-left'>
					<p className='table-paragraph'>GRADES WILL GO HERE</p>
				</div>
			</main>
		);
	}
}

export default TranscriptShow;