import React from 'react';
import { values, merge } from 'lodash';

class PostForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			user_id: '',
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.addPost = this.addPost.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchPosts();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectPath() {
		window.location.hash = `/${this.props.currentUser.username}/profile/posts`;
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addPost();
		}
	};

	addPost() {
		let data = {
			post: {
				title: this.state.title,
				body: this.state.body,
				user_id: this.props.currentUser.id
			}
		};

		if (data.post.body.trim().length > 0) {
			this.props.createPost(data);
		}

		this.setState({
			title: '',
			body: '',
			user_id: ''
		});

		this.redirectPath();
	};

	render() {
		const {
			title,
			body,
			user_id
		} = this.state;
		
		return (
			<div>
				<form className="form-style-regular">
					<ul>
						<li>
							<input type="text" className="field-style field-split align-left" value={title} onChange={this.update('title')} placeholder="Title" />
						</li>
						<li>
							<textarea className="field-style" value={body} onChange={this.update('body')} placeholder="body"></textarea>
						</li>
						<li>
							<input type="submit" value="Add Post" onClick={this.addPost} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default PostForm;