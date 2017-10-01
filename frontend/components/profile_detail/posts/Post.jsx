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
		window.location.hash = `/${this.props.currentUser.username}/posts/${this.props.post.id}`;
	};


  render() {
		const { 
			id,
			title, 
			body
		} = this.props.post;

    return (
			<tr onClick={this.showPost}>
				<td>{id}</td>
				<td>{title}</td>
				<td>{body.slice(0,35) + ' ...'}</td>
			</tr>
    );
  }
}

export default Post;