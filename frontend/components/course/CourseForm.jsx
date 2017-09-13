import React from 'react';

class CourseForm extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			value24: null, 
			value12: null
		};

		this.addCourse = this.addCourse.bind(this);
		this.resetT = this.resetT.bind(this);
	};

	addCourse(e) {
    console.log('submitting .....')
	};

	resetT(e) {
		window.location.hash = '/registrar';
	};
	
	render() {
		return (
			<div>
				<form className="form-style-9">
					<ul>
						<li>
							<input type="text" name="field1" className="field-style field-split align-left" placeholder="Course Code" />
							<input type="email" name="field2" className="field-style field-split align-right" placeholder="Title" />
						</li>
						<li>
							<input type="text" name="field3" className="field-style field-split align-left" placeholder="Department" />
							<input type="email" name="field4" className="field-style field-split align-right" placeholder="Instructor" />
						</li>
						<li>
							<input type="text" name="field5" className="field-style field-split align-left" placeholder="Course Credit" />
							<input type="email" name="field6" className="field-style field-split align-right" placeholder="Max Class Size" />
						</li>
						<li>
							<input type="text" name="field7" className="field-style field-split align-left" placeholder="Start time" />
							<input type="url" name="field8" className="field-style field-split align-right" placeholder="End Time" />
						</li>
						<li>
							<textarea name="field9" className="field-style" placeholder="Description"></textarea>
						</li>
						<li>
							<input type="submit" value="Add Course" onClick={this.addCourse}/>
							<input type="submit" value="Cancel" onClick={this.resetT} className="field-split align-right"/>
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default CourseForm;