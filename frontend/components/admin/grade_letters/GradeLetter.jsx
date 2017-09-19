import React from 'react';
import ReactDOM from 'react-dom';

class GradeLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
		};
		this.editGradeLetter = this.editGradeLetter.bind(this);
		this.deleteGradeLetter = this.deleteGradeLetter.bind(this);
	};

  editGradeLetter() {
		window.location.hash = `/admin/${this.props.currentUser.username}/grade_letters/edit/${this.props.grade_letter.id}`;
	};

	deleteGradeLetter() {
		this.props.deleteGradeLetter(this.props.grade_letter.id)
	};


  render() {
		const { 
			letter, 
			weight
		} = this.props.grade_letter;

    return (
			<tr>
				<td>{letter}</td>
				<td>{weight}</td>
				<td onClick={this.editGradeLetter}>Edit</td>
				<td onClick={this.deleteGradeLetter}>Delete</td>
			</tr>
    );
  }
}

export default GradeLetter;