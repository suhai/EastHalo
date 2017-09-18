import React from 'react';
import { values, merge } from 'lodash';

class GradeForm extends React.Component {
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
		this.addGrade = this.addGrade.bind(this);
		this.redirectAction = this.redirectAction.bind(this);
	};

	componentDidMount() {
		this.props.fetchGrades();
		this.props.fetchUsers();
		this.props.fetchCourses();
		this.props.fetchGradeLetters();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectAction() {
		window.location.hash = `admin/${this.props.currentUser.username}/grades`;
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addGrade();
		}
	};

	addGrade() {
		let data = {
			grade: {
				course_id: this.state.course_id,
				student_id: this.state.student_id,
				grade_letter_id: this.state.grade_letter_id, 
				comment: this.state.comment 
			}
		};

		if (data.grade.comment.trim().length > 0) {
			this.props.createGrade(data);
		};

		this.setState({
			course_id: '',
			student_id: '',
			grade_letter_id: '', 
			comment: '' 
		});

		this.redirectAction();
	};

	render() {
		const {
			course_id,
			student_id,
			grade_letter_id,
			comment
		} = this.state;

		let studentList = values(this.props.users).filter(function(person) {
			return person.type == 'Student';
		})
		.map((user, idx) => (
			<option key={idx} value={user.id} onChange={this.update('student_id')}>{`${user.lname}, ${user.fname.slice(0,1).toUpperCase()}`}</option>
		));

		let grade_letList = values(this.props.grade_letters).map((grade, idx) => (
			<option key={idx} value={grade.id} onChange={this.update('grade_letter_id')}>{grade.letter}</option>
		));

		let courseList = values(this.props.courses).map((course, idx) => (
			<option key={idx} value={course.id} onChange={this.update('course_id')}>{course.course_code}</option>
		));
		
		return (
			<div>
				<form className="form-style-9">
					<ul>
						<li>
							<select className="field-style field-split align-left"  value={student_id} onChange={this.update('student_id')} placeholder="Choose Student">
								{studentList}
							</select>
							<select className="field-style field-split align-right"  value={course_id} onChange={this.update('course_id')} placeholder="Choose Course">
								{courseList}
							</select>
							<select className="field-style field-split align-left"  value={grade_letter_id} onChange={this.update('grade_letter_id')} placeholder="Choose Grade">
								{grade_letList}
							</select>	
						</li>
						<li>
							<textarea className="field-style" value={comment} onChange={this.update('comment')} placeholder="Instructor Comment"></textarea>
						</li>
						<li>
							<input type="submit" value="Add Grade" onClick={this.addGrade} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default GradeForm;