import React from 'react';
import { values, merge } from 'lodash';

class Transcript extends React.Component {
	constructor(props) {
		super(props);

	};

	componentDidMount() {
	
	};

	render() {
		const {
			id,
			fname,
			lname,
			gpa,
			dob,
			gender,
			completed_course_credit,
			current_course_load,
			cash_balance,
			email,
			phone_number,
			grades,
			profile_image_url,
		} = this.props.currentUser;

		return (
			<main className='user-page'>
				<div className="img-gallery">
					<div className="gallery">
						<img src={profile_image_url} alt={fname} />
					</div>
					<hr/>
				</div>
				<h3>STUDENT ACADEMIC RECORD</h3>
				<div className='profile-page-detail'>
					<div className='profile-detail-table'>
						<table>
							<tr>
								<th className='profile-table-header'>Student Information</th>
								<th className='profile-table-header'>Details</th>
							</tr>
							<tr>
								<td>STUDENT ID</td>
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
								<td>D.O.B</td>
								<td>{dob}</td>
							</tr>
							<tr>
								<td>Phone Number</td>
								<td>{phone_number}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{email}</td>
							</tr>
							<tr>
								<td>Gender</td>
								<td>{gender}</td>
							</tr>
							<tr>
								<td>Cummulative GPA</td>
								<td>{gpa}</td>
							</tr>
							<tr>
								<td>Cummulative Credits</td>
								<td>{completed_course_credit}</td>
							</tr>
							<tr>
								<td>Account Balance</td>
								<td>{cash_balance}</td>
							</tr>
						</table>
					</div>
					<h3>GRADES WILL GO DOWN HERE</h3>
				</div>
      </main>
		);
	}
}

export default Transcript;