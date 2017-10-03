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
		window.location.hash = `/${this.props.currentUser.username}/posts/${this.props.match.params.id}/comments/commentform`;
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
			user_id,
			comments
		} = this.state.post;

		let displayComments = <p></p>;
		if (comments) {
			displayComments = comments.map((comment, idx) => (
				<p key={idx}>{comment.body}</p>
			));
		}

		let displayButtons = this.props.currentUser.id == user_id ?
		<div className='grouped-buttons'>
			<button className='btn edit lefty' onClick={this.editPost}>Edit Post</button>
			<button className='blank'></button>
			<button className='btn delete righty' onClick={this.deletePost}>Delete Post</button>
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
					<div className='show-page-display'>			
						{displayButtons}
						<h2 className='course-header'>{title}</h2>
						<div>
							<div>
								<p>{body}</p>
								<div className='comments-div'>
									<h6>Comments</h6>
									{displayComments}
								</div>
								<button className='commentable' onClick={this.renderCommentForm}>Add Comment</button>
							</div>
						</div>	
					</div>
				</div>
			</main>
		);
	}
}

export default PostShow;