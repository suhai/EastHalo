// // import React from 'react'
// import { Field, reduxForm } from 'redux-form';
// // import TextField from 'material-ui/TextField';
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
// import Checkbox from 'material-ui/Checkbox';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import asyncValidate from './asyncValidate';
// import TimePicker from 'material-ui/TimePicker';


// const validate = values => {
// 	const errors = {}
// 	const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
// 	requiredFields.forEach(field => {
// 		if (!values[field]) {
// 			errors[field] = 'Required'
// 		}
// 	})
// 	if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// 		errors.email = 'Invalid email address'
// 	}
// 	return errors
// }

// const renderTextField = props => (
// 	<TextField hintText={props.label}
// 		floatingLabelText={props.label}
// 		errorText={props.touched && props.error}
// 		{...props}
// 	/>
// )

// const renderCheckbox = props => (
// 	<Checkbox label={props.label}
// 		checked={props.value ? true : false}
// 		onCheck={props.onChange} />
// )

// const renderSelectField = props => (
// 	<SelectField
// 		floatingLabelText={props.label}
// 		errorText={props.touched && props.error}
// 		{...props}
// 		onChange={(event, index, value) => props.onChange(value)}>
// 	</SelectField>
// )

// class CourseForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value24: null, value12: null};
// 	};

// 	handleChangeTimePicker24(event, date) {
// 		this.setState({value24: date});
// 	};

// 	handleChangeTimePicker12(event, date) {
// 		this.setState({value12: date});
// 	};

// 	render() {
// 		const { 
// 			handleSubmit, 
// 			pristine, 
// 			reset, 
// 			submitting 
// 		} = this.props;

// 		return (
// 			<form onSubmit={handleSubmit}>
// 				<div>
// 					<Field name="courseCode" component={renderTextField} label="Course Code" />
// 				</div>
// 				<div>
// 					<Field name="courseTitle" component={renderTextField} label="Course Title" />
// 				</div>
// 				<div>
// 					<Field name="courseCredit" component={renderTextField} label="Course Credit" />
// 				</div>
// 				<div>
// 					<TimePicker
// 						format="24hr"
// 						hintText="Start Time"
// 						value={this.state.value24}
// 						onChange={this.handleChangeTimePicker24}
// 					/>
// 					<TimePicker
// 						format="24hr"
// 						hintText="End Time"
// 						value={this.state.value24}
// 						onChange={this.handleChangeTimePicker24}
// 					/>
// 				</div>
// 				<div>
// 					<Field name="notes" component={renderTextField} label="Course Description" multiLine={true} rows={2} />
// 				</div>
// 				<div>
// 					<Field name="courseCap" component={renderTextField} label="Course Cap" />
// 				</div>
// 				<div>
// 					<button type="submit" disabled={pristine || submitting}>Submit</button>
// 					<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
// 				</div>
// 				<hr/>

// 				<div>
// 					<Field name="firstName" component={renderTextField} label="First Name" />
// 				</div>
// 				<div>
// 					<Field name="lastName" component={renderTextField} label="Last Name" />
// 				</div>
// 				<div>
// 					<Field name="email" component={renderTextField} label="Email" />
// 				</div>
				
// 				<div>
// 					<Field name="sex" component={RadioButtonGroup}>
// 						<RadioButton value="male" label="male" />
// 						<RadioButton value="female" label="female" />
// 					</Field>
// 				</div>
// 				<div>
// 					<Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
// 						<MenuItem value={'ff0000'} primaryText="Red" />
// 						<MenuItem value={'00ff00'} primaryText="Green" />
// 						<MenuItem value={'0000ff'} primaryText="Blue" />
// 					</Field>
// 				</div>
// 				<div>
// 					<Field name="employed" component={renderCheckbox} label="Employed" />
// 				</div>
// 				<div>
// 					<Field name="notes" component={renderTextField} label="Notes" multiLine={true} rows={2} />
// 				</div>
// 				<div>
// 					<button type="submit" disabled={pristine || submitting}>Submit</button>
// 					<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
// 				</div>
// 			</form>
// 		)
// 	}
// }

// export default reduxForm({
// 	form: 'courseForm',  // a unique identifier for this form
// 	validate,
// 	asyncValidate
// })(CourseForm)


import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

const style = {
  marginLeft: 20,
};

class CourseForm extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			value24: null, 
			value12: null
		};
		this.handleChangeTimePicker24 = this.handleChangeTimePicker24.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetT = this.resetT.bind(this);
	};
	
	handleChangeTimePicker24(event, date) {
    this.setState({value24: date});
  };

	handleSubmit(e) {
    console.log('submitting .....')
	};

	resetT(e) {
    console.log('reseting .....')
	};
	
	render() {
		return (
			<Paper zDepth={2}>
				<TextField hintText="Course Code" style={style} underlineShow={false} />
				<Divider />
				<TextField hintText="Course Title" style={style} underlineShow={false} />
				<Divider />
				<TextField hintText="Course Description" style={style} underlineShow={false} />
				<Divider />
				<TextField hintText="Course Load" style={style} underlineShow={false} />
				<Divider />
				<TimePicker
				format="ampm"
				hintText="Start Time"
				value={this.state.value24}
				onChange={this.handleChangeTimePicker24} />
				<TimePicker
				format="24hr"
				hintText="End Time"
				value={this.state.value24}
				onChange={this.handleChangeTimePicker24} />
				<Divider />
				<TextField hintText="Max Size" style={style} underlineShow={false} />
				<Divider />
        
				<div>
					<button type="submit" className='submit' onClick={this.handleSubmit}>Submit</button>
					<button type="button" className='clear' onClick={this.resetT}>Clear Values</button>
				</div>
			</Paper>
		)
	};
};

export default CourseForm;