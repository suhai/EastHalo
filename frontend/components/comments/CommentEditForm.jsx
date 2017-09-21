import React from 'react';
import { values, merge } from 'lodash';

class CommentEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			body: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editComment = this.editComment.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchComment(id);
		this.props.fetchUsers();
		this.props.fetchComments();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editComment();
		}
	};

	redirectPath() {
		// window.location.hash = `admin/${this.props.currentUser.username}/Comments`;
		console.log('I have to be redirected to the post page');
	};

	editComment() {
		let data = {
			comment: {
				body: this.state.body
			}
		};
		this.setState({
			body: ''
		});

		let id = this.props.match.params.id;
		this.props.editComment(data, id);
		this.redirectPath();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.comments).length > 0 ?
		this.setState({
			id: props.match.params.id,
			body: props.comments[props.match.params.id].body
		}) :
		this.setState({
			body: ''
		});
	};


	render() {
		const {
			body
		} = this.state;

		return (
			<div>
				<h2 className='course-header'>{title}</h2>
				<form className="form-style-9">
					<ul>
						<li>
							<textarea className="field-style" value={body} onChange={this.update('body')} ></textarea>
						</li>
						<li>
							<input type="submit" value="Save" onClick={this.editComment} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default CommentEditForm;