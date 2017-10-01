import React from 'react';
import { values, merge } from 'lodash';

class GradeLetterEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			letter: '',
			weight: 0
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editGradeLetter = this.editGradeLetter.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchGradeLetter(id);
		this.props.fetchGradeLetters();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editGradeLetter();
		}
	};

	redirectPath() {
		window.location.hash = `admin/${this.props.currentUser.username}/grade_letters`;
	};

	editGradeLetter() {
		let data = {
			grade_letter: {
				id: this.state.id,
				letter: this.state.letter,
				weight: this.state.weight
			}
		};
		this.setState({
			id: '',
			letter: '',
			weight: 0
		});

		let id = this.props.match.params.id;
		this.props.editGradeLetter(data, id);
		this.redirectPath();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.grade_letters).length > 0 ?
		this.setState({
			id: props.match.params.id,
			letter: props.grade_letters[props.match.params.id].letter,
			weight: props.grade_letters[props.match.params.id].weight
		}) :
		this.setState({
			id: '',
			letter: '',
			weight: 0
		});
	};


	render() {
		const {
			id,
			letter,
			weight
		} = this.state;

		return (
			<main className='user-page'>
				<form className="form-style-regular">
					<ul>
						<li>
						<input type="text" className="field-style field-split align-left" value={letter} onChange={this.update('letter')} placeholder="GradeLetter Name" />
						<input type="number" className="field-style field-split align-right" value={weight} onChange={this.update('weight')} placeholder="GradeLetter Weight" />
						</li>
						<li>
							<input type="submit" value="Save" onClick={this.editGradeLetter} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</main>
		)
	};
};

export default GradeLetterEditForm;