import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import CourseShow from './CourseShow';
import CourseAddForm from './CourseAddForm';
import CourseEditForm from './CourseEditForm';

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
		this.state = { 
			showCourse: false, 
			showAddForm: false, 
			showEditForm: false
		};
  }

	renderContent() {
		if (this.state.CourseAddForm) {
			return (
				<CourseShow
					
				/>
			);
		}

		if (this.state.showEditForm) {
			return (
				<CourseEditForm
					onCancel={() => this.setState({ showEditForm: false })}
				/>
			);
		}

		return (
			<CourseAddForm 
				onCancel={() => this.setState({ showAddForm: false })}
			/>
		);
	}

	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

export default reduxForm({
  form: 'courseForm'
})(CourseForm);