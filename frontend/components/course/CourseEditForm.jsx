import React from 'react';

class CourseEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			course_code: '',
			title: '',
			department_id: '',
			professor_id: '',
			course_credit: '',
			course_cap: '',
			start_time: '',
			end_time: '',
			course_description: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editCourse = this.editCourse.bind(this);
		this.redirectAction = this.redirectAction.bind(this);
	};

	componentWillMount() {
		const id = this.props.match.params.id;
		this.props.fetchCourse(id);
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editCourse();
		}
	};

	redirectAction() {
		let id = this.props.match.params.id;
		window.location.hash = `courses/${id}`;
	};

	editCourse() {
		let data = {
			course: {
				id: this.props.match.params.id,
				course_code: this.state.course_code,
				title: this.state.title,
				department_id: this.state.department_id,
				professor_id: this.state.professor_id,
				start_time: this.state.start_time,
				end_time: this.state.end_time,
				course_credit: this.state.course_credit,
				course_cap: this.state.course_cap,
				course_description: this.state.course_description
			}
		};
		this.setState({
			id: '',
			course_code: '',
			title: '',
			department_id: '',
			professor_id: '',
			start_time: '06:00',
			end_time: '07:00',
			course_credit: '',
			course_cap: '',
			course_description: ''
		});

		let id = this.props.match.params.id;
		this.props.editCourse(data, id);
		this.redirectAction();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.courses).length > 0 ?
			this.setState({
				id: props.match.params.id,
				course_code: props.courses[props.match.params.id].course_code,
				title: props.courses[props.match.params.id].title,
				department_id: props.courses[props.match.params.id].department_id,
				professor_id: props.courses[props.match.params.id].professor_id,
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
				department_id: '',
				professor_id: '',
				start_time: '06:00',
				end_time: '07:00',
				course_credit: '',
				course_cap: '',
				course_description: ''
			});
	};


	render() {
		const {
			course_code,
			title,
			department_id,
			professor_id,
			start_time,
			end_time,
			course_credit,
			course_cap,
			course_description
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{title}</h2>
				<form className="form-style-9">
					<ul>
						<li>
							<input type="text" className="field-style field-split align-left" value={course_code} onChange={this.update('course_code')} />
							<input type="text" className="field-style field-split align-right" value={title} onChange={this.update('title')} />
						</li>
						<li>
							<input type="text" className="field-style field-split align-left" value={department_id} onChange={this.update('department_id')} />
							<input type="text" className="field-style field-split align-right" value={professor_id} onChange={this.update('professor_id')} />
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
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default CourseEditForm;