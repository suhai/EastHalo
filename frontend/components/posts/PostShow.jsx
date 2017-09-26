import React from 'react';
import { values, merge } from 'lodash';

class PostShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {}

		};
		this.editPost = this.editPost.bind(this);
		this.deletePost = this.deletePost.bind(this);
		this.renderCommentForm = this.renderCommentForm.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
		this.props.fetchPosts();
	};

	editPost() {
		let id = this.props.match.params.id;
		window.location.hash = `/${this.props.currentUser.username}/posts/edit/${id}`;
	};

	deletePost() {
		let id = this.props.match.params.id;
		this.props.deletePost(id)
		window.location.hash = `/admin/${this.props.currentUser.username}/posts`;
	};

	renderCommentForm() {
		// jQuery to display commentable text area, but for now
		window.location.hash = `/admin/${this.props.currentUser.username}/posts/${this.props.match.params.id}/comments/commentform`;
	};

	componentWillReceiveProps(props) {
		Object.keys(props.posts).length > 0 ?
			this.setState({
				post: props.posts[props.match.params.id]
			}) :
			this.setState({
				post: {},
				title: '',
				body: '',
				image_url: ''
			});
	}

	render() {
		const {
			id,
			title,
			body,
			image_url,
			user_id
		} = this.state.post;

		let displayButtons = this.props.currentUser.id == user_id ?
		<div className='grouped-buttons'>
			<button className='btn edit' onClick={this.editPost}>Edit Post</button>
			<button className='btn delete' onClick={this.deletePost}>Delete Post</button>
		</div> : <div></div>

		return (
			<main className='user-page'>
				<div>
					<div className="img-gallery">
						<div className="gallery">
							<img src={image_url} alt={title} />
						</div>
					</div>
					<hr/>				
						{displayButtons}
					<h2 className='course-header'>{title}</h2>
					<div>
						<div>
							<p>{body}</p>
						</div>
						<div className='comment-div' onClick={this.renderCommentForm}>
						</div>
					</div>	
				</div>
			</main>
		);
	}
}

export default PostShow;