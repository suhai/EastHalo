import React from 'react';
import { values, merge } from 'lodash';

class CommentShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commente: {}
		};
		this.deleteComment = this.deleteComment.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchComment(id);
	};

	deleteComment() {
		this.props.deleteComment(this.state.comment.id)
		// redirect after this
	};

	componentWillReceiveProps(props) {
		Object.keys(props.comments).length > 0 ?
			this.setState({
				comment: props.comments[props.match.params.id]
			}) :
			this.setState({
				comment: {}
			});
	}

	render() {
		const {
			id,
			user_id,
			post_id
		} = this.state.comment;

		return (
			<main className='user-page'>
				<div>
					<h2 className='course-header'>{id}</h2>
					<div className='grouped-buttons'>
						<button className='btn delete' onClick={this.deleteComment}>Delete Comment</button>
					</div>
				</div>
				<hr />
				
				<table id="background-image" className="full-width">
					<thead>
						<tr className='fixed-header'>
							<th scope="col">Comment Information</th>
							<th scope="col">Comment Detail</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>User ID</td>
							<td>{user_id}</td>
						</tr>
						<tr>
							<td>Post ID</td>
							<td>{post_id}</td>
						</tr>
						<tr>
							<td>Comment</td>
							<td>{body}</td>
						</tr>
					</tbody>
				</table>
			</main>
		);
	}
}

export default CommentShow;