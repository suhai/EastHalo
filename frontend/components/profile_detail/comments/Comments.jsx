import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';
import Commentt from './Commentt';

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
		this.props.fetchComments();
	};

	render() {
		let commentList = values(this.props.comments);
		let comments = commentList.map((comment, idx) => (
			<Commentt key={idx} comment={comment} />
		));

		return (
			<div className=''>
				<table id="gradient-style" className="full-width">
					<thead>
						<tr>
							<th scope="col">User ID</th>
							<th scope="col">Post ID</th>
							<th scope="col">Comment</th>
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
