// import React from 'react';
// import { values, merge } from 'lodash';

// class DepartmentEditForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			id: '',
// 			name: ''
// 		};

// 		this.update = this.update.bind(this);
// 		this.handleKey = this.handleKey.bind(this);
// 		this.editDepartment = this.editDepartment.bind(this);
// 		this.redirectAction = this.redirectAction.bind(this);
// 	};

// 	componentDidMount() {
// 		const id = this.props.match.params.id;
// 		this.props.fetchDepartment(id);
// 		this.props.fetchDepartments();
// 	};

// 	update(prop) {
// 		return e => this.setState({ [prop]: e.currentTarget.value });
// 	};

// 	handleKey(e) {
// 		if (e.keyCode === 13) {
// 			this.editDepartment();
// 		}
// 	};

// 	redirectAction() {
// 		window.location.hash = `admin/${this.props.currentUser.username}/departments`;
// 	};

// 	editDepartment() {
// 		let data = {
// 			department: {
// 				id: this.state.id,
// 				name: this.state.name
// 			}
// 		};
// 		this.setState({
// 			id: '',
// 			name: ''
// 		});

// 		let id = this.props.match.params.id;
// 		this.props.editDepartment(data, id);
// 		this.redirectAction();
// 	};

// 	componentWillReceiveProps(props) {
// 		Object.keys(props.departments).length > 0 ?
// 		this.setState({
// 			id: props.match.params.id,
// 			name: props.departments[props.match.params.id].name
// 		}) :
// 		this.setState({
// 			id: '',
// 			name: ''
// 		});
// 	};


// 	render() {
// 		const {
// 			id,
// 			name
// 		} = this.state;

// 		return (
// 			<div>
// 				<h2 className='course-header'>{name}</h2>
// 				<form className="form-style-9">
// 					<ul>
// 						<li>
// 							<input type="text" className="field-style field-split align-center" value={name} onChange={this.update('name')} />
// 						</li>
// 						<li>
// 							<input type="submit" value="Save" onClick={this.editDepartment} />
// 							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectAction} />
// 						</li>
// 					</ul>
// 				</form>
// 			</div>
// 		)
// 	};
// };

// export default DepartmentEditForm;