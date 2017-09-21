import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Comment from './Comment';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
		this.renderForm = this.renderForm.bind(this);
	};

	renderForm() {
		window.location.hash = `/admin/${this.props.currentUser.username}/comments/commentform`;
	};

	componentDidMount() {
		this.props.fetchAllComments();
	};

	render() {
		// debugger
		let commentList = [
			{user_id: 1, post_id: 21, body: 'Hello America'},
			{user_id: 2, post_id: 22, body: 'Hello Asia'},
			{user_id: 3, post_id: 23, body: 'Hello Africa'},
			{user_id: 4, post_id: 24, body: 'Hello Europe'},
			{user_id: 5, post_id: 25, body: 'Hello Australia'}
		]
		// let commentList = values(this.props.comments);
		let comments = commentList.map((comment, idx) => (
			<Comment key={idx} comment={comment} editComment={this.props.editComment} deleteComment={this.props.deleteComment}/>
		));

		return (
			<div className=''>
				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">User ID</th>
							<th scope="col">Post ID</th>
							<th scope="col">Comment</th>
							<th scope="col">Action I</th>
							<th scope="col">Action II</th>
						</tr>
					</thead>

					<tbody>
						{comments}
					</tbody>

				</table>
				<p className='pull-left'>
					Table Footer or Description Will Go Here
				</p>
			</div>
		);
	}
}

export default Comments;
