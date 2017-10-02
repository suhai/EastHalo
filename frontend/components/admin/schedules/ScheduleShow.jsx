import React from 'react';
import { values, merge } from 'lodash';

class ScheduleShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				courses: {}
			}
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
				user: {
					courses: {}
				}
			});
	}

	render() {
		const {
			id,
			fname,
			lname,
			courses
		} = this.state.user;

		let courseInfos = values(courses).map((course, idx) => {
			<tr key={idx}> 
				<td>{course.course_code}</td>
				<td>{course.start_time}</td>
				<td>{course.end_time}</td>
				<td>{course.course_credit}</td>
				<td>{course.professor.lname}</td>
			</tr>
		});

		return (
			<main className='user-page'>
				<div>
					<div className='grouped-buttons'>
						<button className='btn edit'>Now What</button>
					</div>
				</div>
				<hr />
				
				<div className='profile-detail-table'>
				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col">Course CODE</th>
							<th scope="col">Start Time</th>
							<th scope="col">End Time</th>
							<th scope="col">Course Load</th>
							<th scope="col">Professor</th>
						</tr>
					</thead>

					<tbody>
						{courseInfos}
					</tbody>
				</table>
				<div className='pull-left'>
					<p className='table-paragraph'>SCHEDULE WILL GO HERE</p>
				</div>
				</div>
			</main>
		);
	}
}

export default ScheduleShow;