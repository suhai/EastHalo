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
		this.editComment = this.editComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.renderCommentForm = this.renderCommentForm.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchPostComments(id);
		this.props.fetchPost(id);
	};

	editPost() {
		let id = this.props.match.params.id;
		window.location.hash = `/admin/${this.props.currentUser.username}/posts/edit/${id}`;
	};

	deletePost() {
		let id = this.props.match.params.id;
		this.props.deletePost(id)
		window.location.hash = `/admin/${this.props.currentUser.username}/posts`;
	};

	editComment() {
		// edit comment. this should be a jquery event
		// find comment_id
		// this.props.editComment(comment_id);
	};

	deleteComment() {
		// find comment_id
		// this.props.deleteComment(comment_id);
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
				image_url: '',
				comments: []
			});
	}

	render() {
		const {
			id,
			title,
			body,
			image_url,
			comments
		} = this.state.post;

		let postComments = values(comments).map((comment, idx) => (
			<p key={idx}><span>[{comment.user_id}]  </span>{comment.body}</p>
		));

		let mybtns = <div className='grouped-buttons'>
		    <button className='btn edit' onClick={this.editPost}>Edit Post</button>
				<button className='btn delete' onClick={this.deletePost}>Delete Post</button>
				</div>

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
						{mybtns}
						<h2 className='course-header'>{title}</h2>
						<div>
							<div>
								<p>{body}</p>
								<div className='comments-div'>
									{postComments}
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