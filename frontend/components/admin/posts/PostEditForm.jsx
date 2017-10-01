import React from 'react';
import { values, merge } from 'lodash';

class PostEditForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
			user_id: '',
			image_url: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.editPost = this.editPost.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
		this.props.fetchUsers();
		this.props.fetchPosts();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.editPost();
		}
	};

	redirectPath() {
		window.location.hash = `admin/${this.props.currentUser.username}/posts`;
	};

	editPost() {
		let data = {
			post: {
				title: this.state.title,
				body: this.state.body,
				user_id: this.state.user_id,
				image_url: this.state.image_url
			}
		};
		this.setState({
			title: '',
			body: '',
			user_id: '',
			image_url: ''
		});

		let id = this.props.match.params.id;
		this.props.editPost(data, id);
		this.redirectPath();
	};

	componentWillReceiveProps(props) {
		Object.keys(props.posts).length > 0 ?
		this.setState({
			id: props.match.params.id,
			title: props.posts[props.match.params.id].title,
			body: props.posts[props.match.params.id].body,
			image_url: this.state.posts[props.match.params.id].image_url,
			user_id: props.posts[props.match.params.id].user_id
		}) :
		this.setState({
			id: '',
			title: '',
			body: '',
			image_url: '',
			user_id: ''
		});
	};


	render() {
		const {
			id,
			title,
			body,
			image_url,
			user_id
		} = this.state;

		return (
			<div>
				<h2 className='post-header'>{title}</h2>
				<form className="form-style-regular">
					<ul>
						<li>
							<input type="text" className="field-style" value={title} onChange={this.update('title')} />
						</li>
						<li>
							<input type="text" className="field-style" value={image_url} onChange={this.update('image_url')} placeholder="Image URL" />
						</li>
						<li>
							<textarea className="field-style" value={body} onChange={this.update('body')} ></textarea>
						</li>
						<li>
							<input type="submit" value="Save" onClick={this.editPost} />
							<input type="submit" value="Cancel" className="field-split align-right" onClick={this.redirectPath} />
						</li>
					</ul>
				</form>
			</div>
		)
	};
};

export default PostEditForm;