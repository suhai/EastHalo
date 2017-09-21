import React from 'react';
import { values, merge } from 'lodash';

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			body: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.addComment = this.addComment.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		// let id = ;
		// this.props.fetchComment(id);
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectPath() {
		window.location.hash = `admin/${this.props.currentUser.username}/posts`;
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addComment();
		}
	};

	addComment() {
		// comment occurs on a particular post
		// find post_id
		let data = {
				comment: {
					user_id: this.props.currentUser.id,
					post_id: post_id,
					body: this.state.body
				}
		};

		if (data.comment.body.trim().length > 0) {
			// this.props.makeComment(data, data.comment.post_id);
		}

		this.setState({
			body: ''
		});

		this.redirectPath();
	};

	render() {
		const {
			body
		} = this.state;
		
		return (
			<div>
				<form className="form-style-9">
					<ul>
						<li>
							<textarea className="field-style" value={body} onChange={this.update('body')} placeholder="Comment Here"></textarea>
						</li>
						<li>
							<input type="submit" value="Add Comment" onClick={this.addComment} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default CommentForm;