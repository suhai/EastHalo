import React from 'react';
import { values, merge } from 'lodash';

class DepartmentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.addDepartment = this.addDepartment.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		this.props.fetchDepartments();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectPath() {
		window.location.hash = `admin/${this.props.currentUser.username}/departments`;
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addDepartment();
		}
	};

	addDepartment() {
		let data = {
			department: {
				name: this.state.name
			}
		};

		if (data.department.name.trim().length > 0) {
			this.props.createDepartment(data);
		}

		this.setState({
			name: ''
		});

		this.redirectPath();
	};

	render() {
		const {
			name
		} = this.state;
		
		return (
			<div>
				<form className="form-style-regular">
					<ul>
						<li>
							<input type="text" className="field-style field-split align-left" value={name} onChange={this.update('name')} placeholder="Department Name" />
						</li>
						<li>
							<input type="submit" value="Add Department" onClick={this.addDepartment} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default DepartmentForm;