import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import GradeLetter from './GradeLetter';

class GradeLetters extends React.Component {
  constructor(props) {
    super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};
	
	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/grade_letters/grade_letterform`;
	};

	componentDidMount() {
		this.props.fetchGradeLetters();
	};

  render() {
		let grade_letterList = values(this.props.grade_letters);
		let grade_letters = grade_letterList.map((grade_letter, idx) => (
			<GradeLetter key={idx} grade_letter={grade_letter} deleteGradeLetter={this.props.deleteGradeLetter} currentUser={this.props.currentUser}/>
		));

    return (
      <div className=''>
				<div><button className='btn create align-left' onClick={this.renderForm}>Create GradeLetter</button></div>

				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">GradeLetter</th>
							<th scope="col">Weight</th>
							<th scope="col">Edit</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>

					<tbody>
						{grade_letters}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
    );
  }
}

export default GradeLetters;