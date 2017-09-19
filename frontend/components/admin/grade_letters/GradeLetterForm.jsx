import React from 'react';
import { values, merge } from 'lodash';

class GradeLetterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			letter: '',
			weight: 0
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.addGradeLetter = this.addGradeLetter.bind(this);
		this.redirectAction = this.redirectAction.bind(this);
	};

	componentDidMount() {
		this.props.fetchGradeLetters();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectAction() {
		window.location.hash = `admin/${this.props.currentUser.username}/grade_letters`;
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addGradeLetter();
		}
	};

	addGradeLetter() {
		let data = {
			grade_letter: {
				letter: this.state.letter,
				weight: this.state.weight,
			}
		};

		if (data.grade_letter.letter.trim().length > 0) {
			this.props.createGradeLetter(data);
		}

		this.setState({
			letter: '',
			weight: 0
		});

		this.redirectAction();
	};

	render() {
		const {
			letter,
			weight
		} = this.state;
		
		return (
			<div>
				<form className="form-style-9">
					<ul>
						<li>
							<input type="text" className="field-style field-split align-left" value={letter} onChange={this.update('letter')} placeholder="GradeLetter Name" />
							<input type="number" className="field-style field-split align-right" value={weight} onChange={this.update('weight')} placeholder="GradeLetter Weight" />
						</li>
						<li>
							<input type="submit" value="Add GradeLetter" onClick={this.addGradeLetter} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default GradeLetterForm;