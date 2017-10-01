import React from 'react';
import { values, merge } from 'lodash';

class CourseEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			course_code: '',
			title: '',
			department_name: '',
			professor_name: '',
			course_credit: '',
			course_cap: '',
			start_time: '',
			end_time: '',
			course_description: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editCourse = this.editCourse.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
		this.props.fetchCourses();
		this.props.fetchUsers();
		this.props.fetchDepartments();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editCourse();
		}
	};

	redirectPath() {
		window.location.hash = `admin/${this.props.currentUser.username}/courses`;
	};

	editCourse() {
		let data = {
			course: {
				course_code: this.state.course_code,
				title: this.state.title,
				start_time: this.state.start_time,
				end_time: this.state.end_time,
				course_credit: this.state.course_credit,
				course_cap: this.state.course_cap,
				course_description: this.state.course_description
			}
		};
		this.setState({
			course_code: '',
			title: '',
			department_name: '',
			professor_name: '',
			start_time: '00:00',
			end_time: '00:00',
			course_credit: '',
			course_cap: '',
			course_description: ''
		});

		let id = this.props.match.params.id;
		this.props.editCourse(data, id);
		this.redirectPath();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.courses).length > 0 ?
		this.setState({
			id: props.match.params.id,
			course_code: props.courses[props.match.params.id].course_code,
			title: props.courses[props.match.params.id].title,
			department_name: props.courses[props.match.params.id].department.name,
			professor_name: `${props.courses[props.match.params.id].professor.lname}, ${props.courses[props.match.params.id].professor.fname.slice(0,1).toUpperCase()}`,
			start_time: props.courses[props.match.params.id].start_time.slice(11,16),
			end_time: props.courses[props.match.params.id].end_time.slice(11,16),
			course_credit: props.courses[props.match.params.id].course_credit,
			course_cap: props.courses[props.match.params.id].course_cap,
			course_description: props.courses[props.match.params.id].course_description
		}) :
		this.setState({
			id: '',
			course_code: '',
			title: '',
			department_name: '',
			professor_name: '',
			start_time: '00:00',
			end_time: '00:00',
			course_credit: '',
			course_cap: '',
			course_description: ''
		});
	};


	render() {
		const {
			course_code,
			title,
			department_name,
			professor_name,
			start_time,
			end_time,
			course_credit,
			course_cap,
			course_description
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{title}</h2>
				<form className="form-style-regular">
					<ul>
						<li>
							<input type="text" className="field-style field-split align-left" value={course_code} onChange={this.update('course_code')} />
							<input type="text" className="field-style field-split align-right" value={title} onChange={this.update('title')} />
						</li>
						<li>
							<select className="field-style field-split align-left" >
								<option>{department_name}</option>
							</select>
							<select className="field-style field-split align-right" >
								<option>{professor_name}</option>
							</select>
						</li>
						<li>
							<input type="number" className="field-style field-split align-left" value={course_credit} onChange={this.update('course_credit')} />
							<input type="number" min="1" max="30" className="field-style field-split align-right" value={course_cap} onChange={this.update('course_cap')} />
						</li>
						<li>
							<input type="time" className="field-style field-split align-left" value={start_time} onChange={this.update('start_time')} />
							<input type="time" className="field-style field-split align-right" value={end_time} onChange={this.update('end_time')} />
						</li>
						<li>
							<textarea className="field-style" value={course_description} onChange={this.update('course_description')} ></textarea>
						</li>
						<li>
							<input type="submit" value="Save" onClick={this.editCourse} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default CourseEditForm;