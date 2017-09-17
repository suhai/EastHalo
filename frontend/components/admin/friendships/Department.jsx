import React from 'react';
import ReactDOM from 'react-dom';

class Department extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
		};
		this.editDepartment = this.editDepartment.bind(this);
		this.deleteDepartment = this.deleteDepartment.bind(this);
	};

  editDepartment() {
		console.log('editing ........');
		window.location.hash = `/admin/${this.props.currentUser.username}/departments/edit/${this.props.department.id}`;
	};

	deleteDepartment() {
		console.log('deleting ........');
		this.props.deleteDepartment(this.props.department.id)
		// window.location.hash = `/admin/${this.props.currentUser.username}/departments`;
	};


  render() {
		const { 
			name, 
		} = this.props.department;

    return (
			<tr>
				<td>{name}</td>
				<td onClick={this.editDepartment}>Edit</td>
				<td onClick={this.deleteDepartment}>Delete</td>
			</tr>
    );
  }
}

export default Department;