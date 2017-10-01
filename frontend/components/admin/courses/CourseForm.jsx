import React from 'react';
import { values, merge } from 'lodash';

class CourseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			course_code: '',
			title: '',
			department_id: '',
			course_credit: '',
			course_cap: '',
			start_time: '',
			end_time: '',
			course_description: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.addCourse = this.addCourse.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchCourses();
		this.props.fetchDepartments();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectPath() {
		window.location.hash = `/admin/${this.props.currentUser.username}/courses`;
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addCourse();
		}
	};

	addCourse() {
		let data = {
			course: {
				course_code: this.state.course_code,
				title: this.state.title,
				department_id: this.state.department_id,
				professor_id: this.props.currentUser.id,
				course_credit: this.state.course_credit,
				course_cap: this.state.course_cap,
				start_time: this.state.start_time,
				end_time: this.state.end_time,
				course_description: this.state.course_description
			}
		};

		if (data.course.course_description.trim().length > 0) {
			this.props.createCourse(data);
		}

		this.setState({
			course_code: '',
			title: '',
			department_id: '',
			course_credit: '',
			course_cap: '',
			start_time: '',
			end_time: '',
			course_description: ''
		});

		this.redirectPath();
	};

	render() {
		const {
			course_code,
			title,
			department_id,
			start_time,
			end_time,
			course_credit,
			course_cap,
			course_description
		} = this.state;

		// let profList = values(this.props.users).filter(function(person) {
		// 	return person.type == 'Professor';
		// })
		// .map((professor, idx) => (
		// 	<option key={idx} value={professor.id} onChange={this.update('professor_id')}>{`${professor.lname}, ${professor.fname.slice(0,1).toUpperCase()}`}</option>
		// ));

		let deptList = values(this.props.departments).map((dept, idx) => (
			<option key={idx} value={dept.id} onChange={this.update('department_id')}>{dept.name}</option>
		));
		
		return (
			<div>
				<form className="form-style-regular">
					<ul>
						<li>
							<input type="text" className="field-style field-split align-left" value={course_code} onChange={this.update('course_code')} placeholder="Course Code" />
							<input type="text" className="field-style field-split align-right" value={title} onChange={this.update('title')} placeholder="Title" />
						</li>
						<li>
							<select className="field-style field-split align-left"  value={department_id} onChange={this.update('department_id')} >
							<option>Select Department</option>
								{deptList}
							</select>
							{/* <select className="field-style field-split align-right"  value={professor_id} onChange={this.update('professor_id')} >
								{profList}
							</select> */}
						</li>
						<li>
							<input type="number" className="field-style field-split align-left" value={course_credit} onChange={this.update('course_credit')} placeholder="Course Credit" />
							<input type="number" min="1" max="30" className="field-style field-split align-right" value={course_cap} onChange={this.update('course_cap')} placeholder="Max Class Size" />
						</li>
						<li>
							<input type="time" className="field-style field-split align-left" value={start_time} onChange={this.update('start_time')} placeholder="Start time" />
							<input type="time" className="field-style field-split align-right" value={end_time} onChange={this.update('end_time')} placeholder="End Time" />
						</li>
						<li>
							<textarea className="field-style" value={course_description} onChange={this.update('course_description')} placeholder="Description"></textarea>
						</li>
						<li>
							<input type="submit" value="Add Course" onClick={this.addCourse} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default CourseForm;