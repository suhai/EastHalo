import React from 'react';
import { values, merge } from 'lodash';

class GradeShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			grade: {
				student: { lanme: '' },
				professor: { lname: '' },
				course: '',
				grade_letter: '',
				weight: '',
				comment: ''
			}
		};
		this.editGrade = this.editGrade.bind(this);
		this.deleteGrade = this.deleteGrade.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchGrade(id);
		this.props.fetchGrades();
	};

	editGrade() {
		window.location.hash = `/admin/${this.props.currentUser.username}/grades/edit/${this.state.grade.id}`;
	};

	deleteGrade() {
		this.props.deleteGrade(this.state.grade.id)
		window.location.hash = `/admin/${this.props.currentUser.username}/grades`;
	};

	componentWillReceiveProps(props) {
		Object.keys(props.grades).length > 0 ?
			this.setState({
				grade: props.grades[props.match.params.id]
			}) :
			this.setState({
				grade: {
					student: { lanme: '' },
					professor: { lname: '' },
					course: '',
					grade_letter: '',
					weight: '',
					comment: ''
				}
			});
	}

	render() {
		const {
			student,
			professor,
			course,
			grade_letter,
			weight,
			comment
		} = this.state.grade;

		return (
			<main className='user-page'>
				<div>
					<div className='grouped-buttons'>
						<button className='btn edit' onClick={this.editGrade}>Edit Grade</button>
						<button className='btn delete' onClick={this.deleteGrade}>Delete Grade</button>
					</div>
				</div>
				<hr />
				
				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col">Grade Info</th>
							<th scope="col">Grade Detail</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Student</td>
							<td>{student.lname}</td>
						</tr>
						<tr>
							<td>Class</td>
							<td>{course.course_code}</td>
						</tr>
						<tr>
							<td>Grade</td>
							<td>{grade_letter.letter}</td>
						</tr>
						<tr>
							<td>Units</td>
							<td>{weight}</td>
						</tr>
						<tr>
							<td>Instructor</td>
							<td>{professor.lname}</td>
						</tr>
					</tbody>
				</table>
				<div className='pull-left'>
					<p className='table-paragraph'>Instructor Comments</p>
					<p>{comment}</p>
				</div>
			</main>
		);
	}
}

export default GradeShow;