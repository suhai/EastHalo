import React from 'react';
import ReactDOM from 'react-dom';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.showPost = this.showPost.bind(this);
  }


  showPost() {
		window.location.hash = `admin/${this.props.currentUser.username}/posts/${this.props.post.id}`;
	};


  render() {
		const { 
			title, 
			body, 
			user_id, 
			user
		} = this.props.post;

    return (
			<tr onClick={this.showPost}>
				<td>{user}</td>
				<td>{title}</td>
				<td>{body.slice(0,35)}</td>
			</tr>
    );
  }
}

export default Post;