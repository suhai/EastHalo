import React from 'react';
import { values, merge } from 'lodash';

class GradeEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			course_id: '',
			student_id: '',
			grade_letter_id: '', 
			comment: '' 
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editGrade = this.editGrade.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchGrades();
		this.props.fetchGrade(id);
		this.props.fetchUsers();
		this.props.fetchCourses();
		this.props.fetchGradeLetters();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editGrade();
		}
	};

	redirectPath() {
		window.location.hash = `admin/${this.props.currentUser.username}/grades/${this.props.match.params.id}`;
	};

	editGrade() {
		let data = {
			grade: {
				course_id: this.state.course_id,
				student_id: this.state.student_id,
				grade_letter_id: this.state.grade_letter_id,
				comment: this.state.comment
			}
		};
		this.setState({
			course_id: '',
			student_id: '',
			grade_letter_id: '',
			comment: ''
		});

		let id = this.props.match.params.id;
		this.props.editGrade(data, id);
		this.redirectPath();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.grades).length > 0 ?
		this.setState({
			id: props.match.params.id,
			course_id: props.grades[props.match.params.id].course.id,
			courseCode: props.grades[props.match.params.id].course.course_code,
			student_id: props.grades[props.match.params.id].student.id,
			studentLName: props.grades[props.match.params.id].student.lname,
			grade_letter_id: props.grades[props.match.params.id].grade_letter.id,
			comment: props.grades[props.match.params.id].comment
		}) :
		this.setState({
			id: '',
			course_id: '',
			student_id: '',
			grade_letter_id: '',
			comment: ''
		});
	};


	render() {
		const {
			course_id,
			student_id,
			grade_letter_id,
			comment,
			courseCode,
			studentLName
		} = this.state;

		let grade_letList = values(this.props.grade_letters).map((grade, idx) => (
			<option key={idx} value={grade.id} onChange={this.update('grade_letter_id')}>{grade.letter}</option>
		));

		return (
			<div>
				<form className="form-style-regular">
					<ul>
						<li>
							<select className="field-style field-split align-left" value={student_id}>
								<option>{studentLName}</option>
							</select>
							<select className="field-style field-split align-right" value={course_id} >
								<option>{courseCode}</option>
							</select>
						</li>
						<li>
							<select className="field-style field-split align-right"  value={grade_letter_id} onChange={this.update('grade_letter_id')} >
								{grade_letList}
							</select>	
						</li>
						<li>
							<textarea className="field-style" value={comment} onChange={this.update('comment')} placeholder="Instructor Comment"></textarea>
						</li>
						<li>
							<input type="submit" value="Save" onClick={this.editGrade} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default GradeEditForm;