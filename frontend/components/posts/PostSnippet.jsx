import React from 'react';
import ReactDOM from 'react-dom';

class PostSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
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
			user
		} = this.props.post;

    return (
			<div>
				<div onClick={this.showPost}>
					<p>{user}</p>
					<p>{title}</p>
					<p>{body}</p>
				</div>
	
				<div>POST SNIPPET GOES HERE</div>
				<hr/>
			</div>
    );
  }
}

export default PostSnippet;