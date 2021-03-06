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

	render() {
		let commentList = values(this.props.currentUser.comments);
		let comments = commentList.map((comment, idx) => (
			<Comment key={idx} comment={comment} />
		));

		return (
			<div className='pages'>
				<h1 className='table-h1'>My Comments</h1>
				<div className="tbl-header2">
				<table cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th scope="col">User ID</th>
							<th scope="col">Post ID</th>
							<th scope="col">Comment</th>
						</tr>
						</thead>
					</table>
				</div>

				<div className="tbl-content">
					<table cellPadding={0} cellSpacing={0}>
						<tbody>
						{comments}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Comments;
