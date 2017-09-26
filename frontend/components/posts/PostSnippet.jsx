import React from 'react';
import ReactDOM from 'react-dom';

class PostSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showPost = this.showPost.bind(this);
  }


  showPost() {
		window.location.hash = `/${this.props.currentUser.username}/posts/${this.props.post.id}`;
	};


  render() {
		const { 
			title, 
			body, 
			user_id, 
			user,
			image_url
		} = this.props.post;

    return (
			<div className="img-gallery" onClick={this.showPost}>
				<div className="gallery">
					<img src={image_url} alt={title} />
					<div className="desc">
					<div>
						<p>{title}</p>
					</div>
					</div>
				</div>
				<hr/>
			</div>
    );
  }
}

export default PostSnippet;